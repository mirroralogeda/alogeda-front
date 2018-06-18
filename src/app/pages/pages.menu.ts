export const PAGES_MENU = [
  {
    path: "pages",
    children: [
      {
        path: "dashboard",
        data: {
          menu: {
            title: "general.menu.dashboard",
            icon: "ion-android-home",
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: "curriculos",
        data: {
          menu: {
            title: "general.menu.curriculos",
            icon: "ion-document",
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: "cadastros",
        data: {
          menu: {
            title: "general.menu.cadastros",
            icon: "ion-edit",
            selected: false,
            expanded: false,
            order: 100
          }
        },
        children: [
          {
            path: "cidades",
            data: {
              menu: {
                title: "general.menu.cidades"
              }
            }
          },
      
          {
            path: "tab-irrf",
            data: {
              menu: {
                title: "general.menu.tab_irrf"
              }
            }
          },
          {
            path: "tab-sal-familia",
            data: {
              menu: {
                title: "general.menu.tab_salario_familia"
              }
            }
          },
          {
            path: "dependentes",
            data: {
              menu: {
                title: "general.menu.dependentes"
              }
            }
          },
          {
            path: "atestados",
            data: {
              menu: {
                title: "general.menu.atestados"
              }
            }
          },
          {
            path: "grupo-eventos",
            data: {
              menu: {
                title: "Grupo de Eventos"
              }
            }
          },
          {
            path: "eventos",
            data: {
              menu: {
                title: "general.menu.eventos"
              }
            }
          },
          {
            path: "eventosFixos",
            data: {
              menu: {
                title: "Eventos Fixos"
              }
            }
          },
          {
            path: "pessoas",
            data: {
              menu: {
                title: "Pessoas"
              }
            }
          }
        ]
      },
      {
        path: "recrutamento",
        data: {
          menu: {
            title: "general.menu.rc",
            icon: "ion-edit",
            selected: false,
            expanded: false,
            order: 100
          }
        },
        children: [
          {
            path: "curriculos",
            data: {
              menu: {
                title: "general.menu.curriculos"
              }
            }
          },
          {
            path: "vagas",
            data: {
              menu: {
                title: "general.menu.vagas"
              }
            }
          },
        ]
      },
      {
        path: "cargos",
        data: {
          menu: {
            title: "general.menu.csbf",
            icon: "ion-edit",
            selected: false,
            expanded: false,
            order: 100
          }
        },
        children: [
          {
            path: "setores",
            data: {
              menu: {
                title: "general.menu.setores"
              }
            }
          },
          {
            path: "funcionarios",
            data: {
              menu: {
                title: "general.menu.funcionarios"
              }
            }
          },
          {
            path: "cargos",
            data: {
              menu: {
                title: "general.menu.cargos"
              }
            }
          }
        ]
      },
      // {
      //   path: "components",
      //   data: {
      //     menu: {
      //       title: "general.menu.components",
      //       icon: "ion-gear-a",
      //       selected: false,
      //       expanded: false,
      //       order: 250
      //     }
      //   },
      //   children: [
      //     {
      //       path: "treeview",
      //       data: {
      //         menu: {
      //           title: "general.menu.tree_view"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "charts",
      //   data: {
      //     menu: {
      //       title: "general.menu.charts",
      //       icon: "ion-stats-bars",
      //       selected: false,
      //       expanded: false,
      //       order: 200
      //     }
      //   },
      //   children: [
      //     {
      //       path: "chartist-js",
      //       data: {
      //         menu: {
      //           title: "general.menu.chartist_js"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "ui",
      //   data: {
      //     menu: {
      //       title: "general.menu.ui_features",
      //       icon: "ion-android-laptop",
      //       selected: false,
      //       expanded: false,
      //       order: 300
      //     }
      //   },
      //   children: [
      //     {
      //       path: "typography",
      //       data: {
      //         menu: {
      //           title: "general.menu.typography"
      //         }
      //       }
      //     },
      //     {
      //       path: "buttons",
      //       data: {
      //         menu: {
      //           title: "general.menu.buttons"
      //         }
      //       }
      //     },
      //     {
      //       path: "icons",
      //       data: {
      //         menu: {
      //           title: "general.menu.icons"
      //         }
      //       }
      //     },
      //     {
      //       path: "modals",
      //       data: {
      //         menu: {
      //           title: "general.menu.modals"
      //         }
      //       }
      //     },
      //     {
      //       path: "slim",
      //       data: {
      //         menu: {
      //           title: "Slim loading bar"
      //         }
      //       }
      //     },
      //     {
      //       path: "grid",
      //       data: {
      //         menu: {
      //           title: "general.menu.grid"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "forms",
      //   data: {
      //     menu: {
      //       title: "general.menu.form_elements",
      //       icon: "ion-compose",
      //       selected: false,
      //       expanded: false,
      //       order: 400
      //     }
      //   },
      //   children: [
      //     {
      //       path: "inputs",
      //       data: {
      //         menu: {
      //           title: "general.menu.form_inputs"
      //         }
      //       }
      //     },
      //     {
      //       path: "layouts",
      //       data: {
      //         menu: {
      //           title: "general.menu.form_layouts"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "tables",
      //   data: {
      //     menu: {
      //       title: "general.menu.tables",
      //       icon: "ion-grid",
      //       selected: false,
      //       expanded: false,
      //       order: 500
      //     }
      //   },
      //   children: [
      //     {
      //       path: "basictables",
      //       data: {
      //         menu: {
      //           title: "general.menu.basic_tables"
      //         }
      //       }
      //     },
      //     {
      //       path: "smarttables",
      //       data: {
      //         menu: {
      //           title: "general.menu.smart_tables"
      //         }
      //       }
      //     },
      //     {
      //       path: "datatables",
      //       data: {
      //         menu: {
      //           title: "Data Tables"
      //         }
      //       }
      //     },
      //     {
      //       path: "hottables",
      //       data: {
      //         menu: {
      //           title: "Hot Tables"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "maps",
      //   data: {
      //     menu: {
      //       title: "general.menu.maps",
      //       icon: "ion-ios-location-outline",
      //       selected: false,
      //       expanded: false,
      //       order: 600
      //     }
      //   },
      //   children: [
      //     {
      //       path: "googlemaps",
      //       data: {
      //         menu: {
      //           title: "general.menu.google_maps"
      //         }
      //       }
      //     },
      //     {
      //       path: "leafletmaps",
      //       data: {
      //         menu: {
      //           title: "general.menu.leaflet_maps"
      //         }
      //       }
      //     },
      //     {
      //       path: "bubblemaps",
      //       data: {
      //         menu: {
      //           title: "general.menu.bubble_maps"
      //         }
      //       }
      //     },
      //     {
      //       path: "linemaps",
      //       data: {
      //         menu: {
      //           title: "general.menu.line_maps"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "",
      //   data: {
      //     menu: {
      //       title: "general.menu.pages",
      //       icon: "ion-document",
      //       selected: false,
      //       expanded: false,
      //       order: 650
      //     }
      //   },
      //   children: [
      //     {
      //       path: ["/login"],
      //       data: {
      //         menu: {
      //           title: "general.menu.login"
      //         }
      //       }
      //     },
      //     {
      //       path: ["/register"],
      //       data: {
      //         menu: {
      //           title: "general.menu.register"
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   path: "",
      //   data: {
      //     menu: {
      //       title: "general.menu.menu_level_1",
      //       icon: "ion-ios-more",
      //       selected: false,
      //       expanded: false,
      //       order: 700
      //     }
      //   },
      //   children: [
      //     {
      //       path: "",
      //       data: {
      //         menu: {
      //           title: "general.menu.menu_level_1_1",
      //           url: "#"
      //         }
      //       }
      //     },
      //     {
      //       path: "",
      //       data: {
      //         menu: {
      //           title: "general.menu.menu_level_1_2",
      //           url: "#"
      //         }
      //       },
      //       children: [
      //         {
      //           path: "",
      //           data: {
      //             menu: {
      //               title: "general.menu.menu_level_1_2_1",
      //               url: "#"
      //             }
      //           }
      //         }
      //       ]
      //     }
      //   ]
      // },
      {
        path: "",
        data: {
          menu: {
            title: "general.menu.external_link",
            url: "http://akveo.com",
            icon: "ion-android-exit",
            order: 800,
            target: "_blank"
          }
        }
      }
    ]
  }
];
