import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import EditorGlobal from "visual/global/Editor";
import Config from "visual/global/Config";
import { pageBlocksSelector } from "visual/redux/selectors";
import { updateBlocks } from "visual/redux/actions";

class EditorPopup extends Component {
  componentDidMount() {
    document.body.classList.add("brz-ow-hidden", "brz-height--100vh");
  }

  handlePageChange = ({ items: blocks }, meta) => {
    this.props.reduxDispatch(updateBlocks({ blocks, meta }));
  };

  render() {
    const { PagePopup } = EditorGlobal.getComponents();
    const { reduxState, reduxDispatch } = this.props;
    const { site } = Config.get("urls");

    const items = pageBlocksSelector(reduxState);

    return (
      <Fragment>
        {Boolean(items.length) && <iframe id="brz-ed-home-page" src={site} />}
        <PagePopup
          dbValue={{ items }}
          reduxState={reduxState}
          reduxDispatch={reduxDispatch}
          onChange={this.handlePageChange}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  reduxState: state
});
const mapDispatchToProps = dispatch => ({
  reduxDispatch: dispatch
});
const areStatesEqual = (state, prevState) =>
  state.pageBlocks === prevState.pageBlocks &&
  state.currentStyleId === prevState.currentStyleId &&
  state.currentStyle === prevState.currentStyle &&
  state.extraFontStyles === prevState.extraFontStyles &&
  state.fonts === prevState.fonts &&
  state.copiedElement === prevState.copiedElement;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {
    areStatesEqual
  }
)(EditorPopup);
