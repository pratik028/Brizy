import React from "react";
import _ from "underscore";
import classnames from "classnames";
import EditorComponent from "visual/editorComponents/EditorComponent";
import EditorArrayComponent from "visual/editorComponents/EditorArrayComponent";
import CustomCSS from "visual/component/CustomCSS";
import SortableElement from "visual/component/Sortable/SortableElement";
import Background from "visual/component/Background";
import ContainerBorder from "visual/component/ContainerBorder";
import SortableHandle from "visual/component/Sortable/SortableHandle";
import Animation from "visual/component/Animation";
import { Roles } from "visual/component/Roles";
import Toolbar from "visual/component/Toolbar";
import { getStore } from "visual/redux/store";
import { globalBlocksSelector } from "visual/redux/selectors";
import * as toolbarConfig from "./toolbar";
import ContextMenu from "visual/component/ContextMenu";
import contextMenuConfig from "./contextMenu";
import ColumnResizer from "./components/ColumnResizer";
import Link from "visual/component/Link";
import { getContainerW } from "visual/utils/meta";
import Items from "./Items";
import { styleBg, styleColumn } from "./styles";
import { css } from "visual/utils/cssStyle";
import defaultValue from "./defaultValue.json";
import { styleSizeWidth } from "visual/utils/style2";

class Column extends EditorComponent {
  static get componentId() {
    return "Column";
  }

  static defaultProps = {
    meta: {},
    popoverData: [],
    onResizeStart: _.noop,
    onResize: _.noop,
    onResizeEnd: _.noop
  };

  static defaultValue = defaultValue;

  containerBorder = React.createRef();

  shouldComponentUpdate(nextProps) {
    const { meta, tabletReversed, mobileReversed } = this.props;
    const reversed =
      nextProps.mobileReversed !== mobileReversed ||
      nextProps.tabletReversed !== tabletReversed;

    return (
      meta.posts || meta.inCarousel || reversed || this.optionalSCU(nextProps)
    );
  }

  handleResizeStart = position => {
    if (this.containerBorder.current) {
      this.containerBorder.current.setActive(true);
    }

    this.props.onResizeStart(position);
  };

  handleResize = (deltaX, position) => {
    this.props.onResize(deltaX, position);
  };

  handleResizeEnd = position => {
    if (this.containerBorder.current) {
      this.containerBorder.current.setActive(false);
    }

    this.props.onResizeEnd(position);
  };

  getMeta(v) {
    const { meta } = this.props;
    const width = styleSizeWidth({ v, device: "desktop" });
    const tabletWidth = styleSizeWidth({ v, device: "tablet" });
    const mobileWidth = styleSizeWidth({ v, device: "mobile" });
    const desktopW = getContainerW({
      v,
      width,
      w: meta.desktopW,
      device: "desktop"
    });
    const tabletW = getContainerW({
      v,
      w: meta.tabletW,
      width: tabletWidth,
      device: "tablet"
    });
    const mobileW = getContainerW({
      v,
      w: meta.mobileW,
      width: mobileWidth,
      device: "mobile"
    });

    return _.extend({}, meta, {
      column: {
        width,
        tabletWidth,
        mobileWidth
      },
      mobileW,
      tabletW,
      desktopW
    });
  }

  isInnerRow() {
    const { meta } = this.props;

    return meta.row && meta.row.isInner;
  }

  renderToolbar = ContainerBorderButton => {
    return (
      <Toolbar {...this.makeToolbarPropsFromConfig2(toolbarConfig)}>
        <SortableHandle>
          <ContainerBorderButton />
        </SortableHandle>
      </Toolbar>
    );
  };

  renderResizer(position) {
    const {
      meta: { row, inGrid },
      popoverData
    } = this.props;

    if (!inGrid) {
      return null;
    }

    const { isFirst } = row.item;
    const isInnerRow = this.isInnerRow();

    if (isFirst && position === "left") {
      return null;
    }

    return (
      <ColumnResizer
        popoverData={popoverData}
        position={position}
        color={isInnerRow && inGrid ? "red" : "blue"}
        onResizeStart={this.handleResizeStart}
        onResize={this.handleResize}
        onResizeEnd={this.handleResizeEnd}
      />
    );
  }

  renderContent(v, vs, vd) {
    const itemsProps = this.makeSubcomponentProps({
      bindWithKey: "items",
      containerClassName: "brz-column__items",
      meta: this.getMeta(v)
    });
    const classNameBg = classnames(
      css(
        `${this.constructor.componentId}-bg`,
        `${this.getId()}-bg`,
        styleBg(v, vs, vd)
      )
    );

    return (
      <Background className={classNameBg} value={v} meta={this.getMeta(v)}>
        <Items {...itemsProps} />
      </Background>
    );
  }

  renderPopups() {
    const popupsProps = this.makeSubcomponentProps({
      bindWithKey: "popups",
      itemProps: itemData => {
        let isGlobal = false;

        if (itemData.type === "GlobalBlock") {
          // TODO: some kind of error handling
          itemData = globalBlocksSelector(getStore().getState())[
            itemData.value.globalBlockId
          ];
          isGlobal = true;
        }

        const {
          blockId,
          value: { popupId }
        } = itemData;

        return {
          blockId,
          instanceKey: IS_EDITOR
            ? `${this.getId()}_${popupId}`
            : isGlobal
            ? `global_${popupId}`
            : popupId
        };
      }
    });

    return <EditorArrayComponent {...popupsProps} />;
  }

  renderForEdit(v, vs, vd) {
    const {
      animationName,
      animationDuration,
      animationDelay,
      items,
      linkType,
      linkPopup,
      popups,
      customID,
      customClassName,
      cssIDPopulation,
      cssClassPopulation
    } = v;
    const {
      meta: { inGrid, posts }
    } = this.props;
    const isInnerRow = this.isInnerRow();

    const classNameColumn = classnames(
      "brz-columns",
      { "brz-columns__posts": IS_EDITOR && posts },
      { "brz-columns--empty": IS_EDITOR && items.length === 0 },
      css(
        `${this.constructor.componentId}-column`,
        `${this.getId()}-column`,
        styleColumn(v, vs, vd)
      ),
      cssClassPopulation === "" ? customClassName : cssClassPopulation
    );

    return (
      <>
        <SortableElement type="column" useHandle={true}>
          <CustomCSS selectorName={this.getId()} css={v.customCSS}>
            <Animation
              className={classNameColumn}
              customID={cssIDPopulation === "" ? customID : cssIDPopulation}
              name={animationName !== "none" && animationName}
              duration={animationDuration}
              delay={animationDelay}
            >
              <Roles
                allow={["admin"]}
                fallbackRender={() => this.renderContent(v, vs, vd)}
              >
                <ContextMenu {...this.makeContextMenuProps(contextMenuConfig)}>
                  <ContainerBorder
                    ref={this.containerBorder}
                    color={isInnerRow && inGrid ? "red" : "blue"}
                    borderStyle="solid"
                    activateOnContentClick={false}
                    showButton={true}
                    buttonPosition="topRight"
                    renderButtonWrapper={this.renderToolbar}
                  >
                    {this.renderResizer("left")}
                    {this.renderResizer("right")}
                    {this.renderContent(v, vs, vd)}
                  </ContainerBorder>
                </ContextMenu>
              </Roles>
            </Animation>
          </CustomCSS>
        </SortableElement>
        {popups.length > 0 &&
          linkType === "popup" &&
          linkPopup !== "" &&
          this.renderPopups()}
      </>
    );
  }

  renderForView(v, vs, vd) {
    const {
      tagName,
      animationName,
      animationDuration,
      animationDelay,
      linkExternalType,
      linkType,
      linkAnchor,
      linkExternalBlank,
      linkExternalRel,
      linkPopup,
      linkUpload,
      popups,
      customID,
      customClassName,
      cssIDPopulation,
      cssClassPopulation
    } = v;

    const linkHrefs = {
      anchor: linkAnchor,
      external: v[linkExternalType],
      popup: linkPopup,
      upload: linkUpload
    };

    const classNameColumn = classnames(
      "brz-columns",
      css(
        `${this.constructor.componentId}-column`,
        `${this.getId()}-column`,
        styleColumn(v, vs, vd)
      ),
      cssClassPopulation === "" ? customClassName : cssClassPopulation
    );

    return (
      <>
        <CustomCSS selectorName={this.getId()} css={v.customCSS}>
          <Animation
            tagName={tagName}
            className={classNameColumn}
            customID={cssIDPopulation === "" ? customID : cssIDPopulation}
            name={animationName !== "none" && animationName}
            duration={animationDuration}
            delay={animationDelay}
          >
            {this.renderContent(v, vs, vd)}
            {linkHrefs[linkType] !== "" && (
              <Link
                className="brz-container-link"
                type={linkType}
                href={linkHrefs[linkType]}
                target={linkExternalBlank}
                rel={linkExternalRel}
              />
            )}
          </Animation>
        </CustomCSS>
        {popups.length > 0 &&
          linkType === "popup" &&
          linkPopup !== "" &&
          this.renderPopups()}
      </>
    );
  }
}

export default Column;
