module.exports = {
  id: "WellnessAppointments",
  thumbnailWidth: 680,
  thumbnailHeight: 1057,
  title: "Appointments",
  keywords:
    "appointments, team, schedule, patients, Health & Beauty, Medical, Hospital, Clinic, Doctor, Dentist, Wellness",
  cat: [0, 13],
  pro: true,
  resolve: {
    blocks: [
      {
        blockId: "Blank000Light",
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h1 class="brz-tp-heading1 brz-text-lg-center"><span class="brz-cp-color8">Make an&nbsp;</span><strong class="brz-cp-color8">Appointment</strong><span class="brz-cp-color8"> right now</span></h1>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      animationName: "fadeInDown",
                      tempAnimationName: "fadeInDown",
                      animationDuration: 900,
                      animationDelay: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-text-lg-center brz-tp-heading5"><span class="brz-cp-color6">Online appointments made really easy</span></p>'
                          }
                        }
                      ],
                      marginTop: 0,
                      animationName: "fadeInUp",
                      tempAnimationName: "fadeInUp",
                      animationDuration: 900,
                      animationDelay: 0
                    }
                  }
                ],
                paddingType: "ungrouped",
                bgColorHex: "",
                bgColorOpacity: 0.6999999999999999555910790149937383830547332763671875,
                tempBgColorOpacity: 0.6999999999999999555910790149937383830547332763671875,
                paddingTop: 60,
                paddingBottom: 80,
                bgColorPalette: "color4",
                bgImageWidth: 1920,
                bgImageHeight: 710,
                bgImageSrc: "8fd3534f1a07d50a0a6fd0b068d78617.jpg",
                bgPositionX: 50,
                bgPositionY: 15,
                tempMobileBgColorOpacity: 1,
                bgPopulation: ""
              }
            }
          ]
        }
      },
      {
        blockId: "Blank000Light",
        type: "Section",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                items: [
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h2 class="brz-text-lg-left brz-tp-heading2"><span class="brz-cp-color1">Request&nbsp;</span></h2><p class="brz-text-lg-left brz-tp-heading2"><span class="brz-cp-color1">Appointment</span></p>'
                                      }
                                    }
                                  ]
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color5">Send us a request &amp; we\'ll get back to you</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--spacer"],
                                  items: [
                                    {
                                      type: "Spacer",
                                      value: {
                                        _styles: ["spacer"],
                                        height: 20
                                      }
                                    }
                                  ],
                                  showOnMobile: "off"
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph"><span class="brz-cp-color7">Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu.</span></p>'
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 33.39999999999999857891452847979962825775146484375,
                            verticalAlign: "center",
                            paddingRight: 50
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--iconText"],
                                  items: [
                                    {
                                      type: "Form",
                                      value: {
                                        _styles: ["form"],
                                        items: [
                                          {
                                            type: "FormFields",
                                            value: {
                                              items: [
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    label: "NAME & SURNAME",
                                                    required: false,
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 50
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    label: "EMAIL ADDRESS",
                                                    required: false,
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ],
                                                    width: 50,
                                                    type: "Email"
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Select",
                                                    label: "MEDICAL FIELD",
                                                    required: false,
                                                    options: [
                                                      "Cardiology",
                                                      "Dental",
                                                      "Oncology",
                                                      "Dermatology",
                                                      "Gyneacology"
                                                    ],
                                                    width: 50
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    label: "DAY",
                                                    required: false,
                                                    options: [
                                                      "Cardiology",
                                                      "Dental",
                                                      "Oncology",
                                                      "Dermatology",
                                                      "Gyneacology"
                                                    ],
                                                    width: 25
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    label: "MONTH",
                                                    required: false,
                                                    options: [
                                                      "Cardiology",
                                                      "Dental",
                                                      "Oncology",
                                                      "Dermatology",
                                                      "Gyneacology"
                                                    ],
                                                    width: 25
                                                  }
                                                },
                                                {
                                                  type: "FormField",
                                                  value: {
                                                    type: "Paragraph",
                                                    label: "ADDITIONAL MESSAGE",
                                                    required: false,
                                                    options: [
                                                      "Option 1",
                                                      "Option 2"
                                                    ]
                                                  }
                                                }
                                              ],
                                              fontStyle: "button",
                                              bgColorPalette: "color8",
                                              borderColorOpacity: 0,
                                              colorPalette: "color1"
                                            }
                                          },
                                          {
                                            type: "Button",
                                            value: {
                                              _styles: ["button", "submit"],
                                              size: "small",
                                              fontSize: 11,
                                              paddingTB: 11,
                                              paddingTop: 11,
                                              paddingBottom: 11,
                                              tempPaddingTB: 11,
                                              tempPaddingTop: 11,
                                              tempPaddingBottom: 11,
                                              paddingRL: 26,
                                              paddingRight: 26,
                                              paddingLeft: 26,
                                              tempPaddingRL: 26,
                                              tempPaddingRight: 26,
                                              tempPaddingLeft: 26,
                                              iconName: "",
                                              iconType: "",
                                              bgColorPalette: "color1",
                                              tempBgColorPalette: "color1",
                                              borderColorPalette: "color1",
                                              tempBorderColorPalette: "color1",
                                              borderRadiusType: "custom",
                                              tempBorderRadiusType: "custom",
                                              borderColorOpacity: 1,
                                              hoverBorderColorOpacity: 0.8000000000000000444089209850062616169452667236328125,
                                              borderRadius: 0,
                                              tempBorderRadius: 0,
                                              hoverBgColorPalette: "color5",
                                              hoverBorderColorPalette: "",
                                              tempHoverBorderColorPalette: "",
                                              hoverBgColorHex: "#db426b",
                                              hoverBgColorOpacity: 1,
                                              hoverBorderColorHex: "#db426b",
                                              tempHoverBgColorOpacity: 1,
                                              text: "SUBMIT"
                                            }
                                          }
                                        ],
                                        horizontalAlign: "center"
                                      }
                                    }
                                  ]
                                }
                              }
                            ],
                            width: 66.599999999999994315658113919198513031005859375,
                            bgColorPalette: "color6",
                            bgColorHex: "",
                            bgColorOpacity: 1,
                            mobilePaddingRight: 10,
                            mobilePaddingLeft: 10,
                            padding: 65,
                            paddingTop: 50,
                            paddingRight: 65,
                            paddingBottom: 50,
                            paddingLeft: 65
                          }
                        }
                      ]
                    }
                  }
                ],
                padding: 100,
                paddingTop: 100,
                paddingBottom: 100
              }
            }
          ]
        }
      },
      {
        type: "Section",
        blockId: "Bogdan011Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                bgColorHex: "#eef0f2",
                bgColorOpacity: 1,
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h2 class="brz-text-lg-center brz-tp-heading2 brz-mb-lg-0"><span class="brz-cp-color1">Meet our&nbsp;</span><strong class="brz-cp-color1">Experienced Team</strong><span class="brz-cp-color1"> of Doctors</span></h2>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      paddingType: "ungrouped",
                      paddingRight: 50,
                      marginTop: 0,
                      paddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-subtitle brz-text-lg-center"><span class="brz-cp-color7">Experienced doctors and Scientist form our medical staff</span></p>'
                          }
                        }
                      ],
                      marginTop: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 40
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Row",
                    value: {
                      _styles: ["row", "hide-row-borders", "padding-0"],
                      items: [
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            width: 25,
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 400,
                                        imageHeight: 400,
                                        imageSrc:
                                          "cef1866d7b9b4aa1eebbf6b4a96196d4.jpg",
                                        borderRadiusType: "rounded",
                                        borderRadius: 132,
                                        resize: 85,
                                        mobileResize: 60,
                                        height: 100,
                                        positionX: 50,
                                        positionY: 50,
                                        imagePopulation: ""
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h5 class="brz-mb-lg-5 brz-mt-lg-10 brz-text-lg-center brz-tp-heading5"><span class="brz-cp-color1">M.D. Samantha Willis</span></h5>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 5
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-button brz-text-lg-center"><span class="brz-cp-color5">Medical Doctor Pediatry</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-paragraph"><span class="brz-cp-color7">Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut.</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              }
                            ],
                            bgColorHex: "#ffffff",
                            paddingTop: 0,
                            padding: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            tempBorderRadius: 6,
                            tempBorderTopLeftRadius: 6,
                            tempBorderTopRightRadius: 6,
                            tempBorderBottomRightRadius: 6,
                            tempBorderBottomLeftRadius: 6,
                            marginRight: 15,
                            marginLeft: 15,
                            bgColorPalette: "color8",
                            margin: 15,
                            marginTop: 15,
                            marginBottom: 15
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            width: 25,
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 400,
                                        imageHeight: 400,
                                        borderRadiusType: "rounded",
                                        borderRadius: 132,
                                        resize: 85,
                                        mobileResize: 60,
                                        imageSrc:
                                          "ea7075d29a43c0d8f913a41560193e77.jpg",
                                        height: 100,
                                        positionX: 50,
                                        positionY: 50,
                                        imagePopulation: ""
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h5 class="brz-mb-lg-5 brz-mt-lg-10 brz-tp-heading5 brz-text-lg-center"><span class="brz-cp-color1">Ph.D. Phillip Sudders</span></h5>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 5
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-button"><span class="brz-cp-color5">Chief of Surgery</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-paragraph"><span class="brz-cp-color7">In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi.</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              }
                            ],
                            bgColorHex: "#ffffff",
                            paddingTop: 0,
                            padding: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            tempBorderRadius: 6,
                            tempBorderTopLeftRadius: 6,
                            tempBorderTopRightRadius: 6,
                            tempBorderBottomRightRadius: 6,
                            tempBorderBottomLeftRadius: 6,
                            marginRight: 15,
                            marginLeft: 15,
                            bgColorPalette: "color8",
                            margin: 15,
                            marginTop: 15,
                            marginBottom: 15
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            width: 25,
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 400,
                                        imageHeight: 400,
                                        borderRadiusType: "rounded",
                                        borderRadius: 132,
                                        resize: 85,
                                        mobileResize: 60,
                                        imageSrc:
                                          "308c7a5518e531b8f5775795cd59a5f7.jpg",
                                        height: 100,
                                        positionX: 50,
                                        positionY: 50,
                                        imagePopulation: ""
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h5 class="brz-tp-heading5 brz-text-lg-center brz-mt-lg-10 brz-mb-lg-5"><span class="brz-cp-color1">Dr. Katherine Field</span></h5>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 5
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-button"><span class="brz-cp-color5">Chief of Oncology</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph brz-text-lg-center"><span class="brz-cp-color7">Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor lorem ipsum posuere.</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              }
                            ],
                            bgColorHex: "#ffffff",
                            paddingTop: 0,
                            padding: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            tempBorderRadius: 6,
                            tempBorderTopLeftRadius: 6,
                            tempBorderTopRightRadius: 6,
                            tempBorderBottomRightRadius: 6,
                            tempBorderBottomLeftRadius: 6,
                            marginRight: 15,
                            marginLeft: 15,
                            bgColorPalette: "color8",
                            margin: 15,
                            marginTop: 15,
                            marginBottom: 15
                          }
                        },
                        {
                          type: "Column",
                          value: {
                            _styles: ["column"],
                            width: 25,
                            items: [
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--image"],
                                  items: [
                                    {
                                      type: "Image",
                                      value: {
                                        _styles: ["image"],
                                        imageWidth: 400,
                                        imageHeight: 400,
                                        borderRadiusType: "rounded",
                                        borderRadius: 132,
                                        resize: 85,
                                        mobileResize: 60,
                                        imageSrc:
                                          "6477efa6375e603456f8e16c94520e20.jpg",
                                        height: 100,
                                        positionX: 50,
                                        positionY: 50,
                                        imagePopulation: ""
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<h5 class="brz-tp-heading5 brz-text-lg-center brz-mt-lg-10 brz-mb-lg-5"><span class="brz-cp-color1">PhD. Mary Simons</span></h5>'
                                      }
                                    }
                                  ],
                                  marginBottom: 0,
                                  marginTop: 5
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-text-lg-center brz-tp-button"><span class="brz-cp-color5">Doctor of Philosophy</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              },
                              {
                                type: "Wrapper",
                                value: {
                                  _styles: ["wrapper", "wrapper--richText"],
                                  items: [
                                    {
                                      type: "RichText",
                                      value: {
                                        _styles: ["richText"],
                                        text:
                                          '<p class="brz-tp-paragraph brz-text-lg-center"><span class="brz-cp-color7">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</span></p>'
                                      }
                                    }
                                  ],
                                  marginTop: 0
                                }
                              }
                            ],
                            bgColorHex: "#ffffff",
                            paddingTop: 0,
                            padding: 0,
                            paddingRight: 0,
                            paddingLeft: 0,
                            paddingBottom: 0,
                            tempBorderRadius: 6,
                            tempBorderTopLeftRadius: 6,
                            tempBorderTopRightRadius: 6,
                            tempBorderBottomRightRadius: 6,
                            tempBorderBottomLeftRadius: 6,
                            marginRight: 15,
                            marginLeft: 15,
                            bgColorPalette: "color8",
                            margin: 15,
                            marginTop: 15,
                            marginBottom: 15
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Cloneable",
                    value: {
                      _styles: ["wrapper-clone", "wrapper-clone--button"],
                      items: [
                        {
                          type: "Button",
                          value: {
                            _styles: ["button"],
                            fontSize: 13,
                            fontFamily: "raleway",
                            letterSpacing: 0,
                            fontWeight: 600,
                            iconName: "",
                            iconType: "",
                            borderRadiusType: "custom",
                            tempBorderRadiusType: "custom",
                            borderColorOpacity: 1,
                            hoverBorderColorOpacity: 1,
                            borderRadius: 0,
                            tempBorderRadius: 0,
                            bgColorPalette: "color1",
                            tempBgColorPalette: "color1",
                            borderColorPalette: "color1",
                            tempBorderColorPalette: "color1",
                            hoverBgColorHex: "#12bdd0",
                            hoverBgColorOpacity: 1,
                            hoverBorderColorHex: "#393c41",
                            tempHoverBgColorOpacity: 1,
                            text: "VIEW ALL STAFF MEMBERS",
                            linkExternalBlank: "off",
                            linkExternal:
                              "https://demo.themefuse.com/wellness/?page_id=2194"
                          }
                        }
                      ]
                    }
                  }
                ],
                paddingType: "ungrouped",
                paddingTop: 80,
                paddingBottom: 100
              }
            }
          ]
        }
      },
      {
        type: "Section",
        blockId: "Bogdan020Light",
        value: {
          _styles: ["section"],
          items: [
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                bgColorHex: "",
                bgColorOpacity: 1,
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h2 class="brz-tp-heading2 brz-text-lg-center brz-mb-lg-0"><span class="brz-cp-color2">What Our&nbsp;</span><strong class="brz-cp-color2">Patients Say</strong><span class="brz-cp-color2"> About Us</span></h2>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      paddingRight: 50,
                      marginTop: 0,
                      paddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 15
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-text-lg-center brz-tp-paragraph"><span class="brz-cp-color7">Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia.</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      mobilePaddingType: "ungrouped",
                      mobilePaddingRight: 50,
                      mobilePaddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--image"],
                      items: [
                        {
                          type: "Image",
                          value: {
                            _styles: ["image"],
                            imageWidth: 500,
                            imageHeight: 500,
                            resize: 12,
                            mobileResize: 25,
                            borderRadiusType: "rounded",
                            borderRadius: 48,
                            imageSrc: "5a0ee769a7c9b3f4faff87d431b5cdbd.jpg",
                            height: 97,
                            positionX: 50,
                            positionY: 50,
                            imagePopulation: ""
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 10
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      marginBottom: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h6 class="brz-tp-heading6 brz-text-lg-center"><span class="brz-cp-color1">James Ranson</span></h6>'
                          }
                        }
                      ],
                      mobileMarginBottom: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-button brz-text-lg-center brz-mb-xs-50"><span class="brz-cp-color5">DENTAL PATIENT</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      paddingRight: 200,
                      paddingLeft: 200,
                      mobileMarginTop: 0
                    }
                  }
                ],
                containerSize: 70,
                padding: 120,
                paddingTop: 100,
                paddingBottom: 120,
                paddingType: "ungrouped",
                bgColorPalette: "color8",
                tempBgColorOpacity: 1
              }
            },
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                bgColorHex: "#ffffff",
                bgColorOpacity: 1,
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h1 class="brz-mb-lg-0 brz-text-lg-center brz-tp-heading2"><span class="brz-cp-color2">What Our&nbsp;</span><strong class="brz-cp-color2">Patients Say</strong><span class="brz-cp-color2"> About Us</span></h1>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      paddingRight: 50,
                      marginTop: 0,
                      paddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 15
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-paragraph brz-text-lg-center"><span class="brz-cp-color7">Sed molestie augue sit amet leo consequat posuere. Vestibulum ante proin vel ante a orci tempus eleifend ut et magna. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis tempor.</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      mobilePaddingType: "ungrouped",
                      mobilePaddingRight: 50,
                      mobilePaddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--image"],
                      items: [
                        {
                          type: "Image",
                          value: {
                            _styles: ["image"],
                            imageWidth: 500,
                            imageHeight: 500,
                            resize: 12,
                            mobileResize: 25,
                            borderRadiusType: "rounded",
                            borderRadius: 53,
                            height: 97,
                            imageSrc: "645f81d81c563d9f862b06973c09fa79.jpg",
                            positionX: 50,
                            positionY: 50,
                            imagePopulation: ""
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 10
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      marginBottom: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h6 class="brz-tp-heading6 brz-text-lg-center"><span class="brz-cp-color1">Martina Hendricks</span></h6>'
                          }
                        }
                      ],
                      mobileMarginBottom: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-button brz-text-lg-center brz-mb-xs-50"><span class="brz-cp-color5">DENTAL PATIENT</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      paddingRight: 200,
                      paddingLeft: 200,
                      mobileMarginTop: 0
                    }
                  }
                ],
                containerSize: 70,
                padding: 120,
                paddingTop: 100,
                paddingBottom: 80,
                paddingType: "ungrouped"
              }
            },
            {
              type: "SectionItem",
              value: {
                _styles: ["section-item"],
                bgColorHex: "#ffffff",
                bgColorOpacity: 1,
                items: [
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h1 class="brz-mb-lg-0 brz-text-lg-center brz-tp-heading2"><span class="brz-cp-color2">What Our&nbsp;</span><strong class="brz-cp-color2">Patients Say</strong><span class="brz-cp-color2"> About Us</span></h1>'
                          }
                        }
                      ],
                      marginBottom: 0,
                      paddingRight: 50,
                      marginTop: 0,
                      paddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 15
                          }
                        }
                      ],
                      showOnMobile: "off"
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-text-lg-center brz-tp-paragraph"><span class="brz-cp-color7">Quisque eget odio ac lectus vestibulum faucibus eget in metus. In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit.</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      mobilePaddingType: "ungrouped",
                      mobilePaddingRight: 50,
                      mobilePaddingLeft: 50
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--image"],
                      items: [
                        {
                          type: "Image",
                          value: {
                            _styles: ["image"],
                            imageWidth: 500,
                            imageHeight: 500,
                            resize: 12,
                            mobileResize: 25,
                            borderRadiusType: "rounded",
                            borderRadius: 53,
                            height: 96,
                            imageSrc: "580d06bfa6a6b511e54f2c601079b8ec.jpg",
                            positionX: 50,
                            positionY: 50,
                            imagePopulation: ""
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--spacer"],
                      items: [
                        {
                          type: "Spacer",
                          value: {
                            _styles: ["spacer"],
                            height: 10
                          }
                        }
                      ]
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      marginBottom: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<h6 class="brz-tp-heading6 brz-text-lg-center"><span class="brz-cp-color1">Martin Hendricks</span></h6>'
                          }
                        }
                      ],
                      mobileMarginBottom: 0
                    }
                  },
                  {
                    type: "Wrapper",
                    value: {
                      _styles: ["wrapper", "wrapper--richText"],
                      marginTop: 0,
                      items: [
                        {
                          type: "RichText",
                          value: {
                            _styles: ["richText"],
                            text:
                              '<p class="brz-tp-button brz-text-lg-center brz-mb-xs-50"><span class="brz-cp-color5">DENTAL PATIENT</span></p>'
                          }
                        }
                      ],
                      paddingType: "ungrouped",
                      paddingRight: 200,
                      paddingLeft: 200,
                      mobileMarginTop: 0
                    }
                  }
                ],
                containerSize: 70,
                padding: 120,
                paddingTop: 100,
                paddingBottom: 80,
                paddingType: "ungrouped"
              }
            }
          ],
          slider: "on",
          sliderAutoPlay: "on",
          sliderAutoPlaySpeed: 5,
          sliderDotsColorPalette: "color2",
          sliderDotsColorOpacity: 1,
          sliderArrowsColorPalette: "color2",
          sliderArrowsColorOpacity: 1
        }
      }
    ]
  }
};