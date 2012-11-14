function patientContextTabSetup(){
require(
  ["dijit/registry",
   "dojo/parser",
   "dijit/layout/TabContainer",
   "dojox/layout/ContentPane",
   "dojo/dom",
   "dojo/dom-construct",
   "dojo/dom-style",
   "dojo/ready",
   "dojo/_base/array"
  ],
  function(registry,parser, TabContainer, ContentPane, dom, domConstruct, domStyle, ready,array){

ready( function(){

      if (registry.byId("patientContextContainer")){
        return; 
      }
      else{
      domConstruct.create('div', {id: "patientContextTabs"}, 
                            "patientContextContainer", "first"
                            );
      domConstruct.create('div', {id: "patientContactTab"}, "patientContextTabs", "first");
        domConstruct.create('div', {id: "contact_list"}, "patientContactTab", "first");
        domConstruct.create('div', {id: "phone_list"}, "patientContactTab", "last");

      domConstruct.create('div', {id: "patientHistoryTab"}, "patientContextTabs", "last");
        
        domConstruct.create('div', {id: "patientHistoryTabs"}, "patientHistoryTab", "first");
          
          domConstruct.create('div', {id: "patientDemographicsTab"}, "patientHistoryTabs", "first");
            domConstruct.create('div', {id: "demographics_add_or_edit_form"}, "patientDemographicsTab", "first");
            domConstruct.create('div', {id: "guardian_list"}, "patientDemographicsTab", "last");
          
          domConstruct.create('div', {id: "patientSocialHistoryTab"}, "patientHistoryTabs", "last");
          
          domConstruct.create('div', {id: "patientFamilyHistoryTab"}, "patientHistoryTabs", "last");
            domConstruct.create('div', {id: "family_history_list"}, "patientFamilyHistoryTab", "first");
          
          domConstruct.create('div', {id: "patientMedicalAndSurgicalHistoryTab"}, "patientHistoryTabs", "last");
            domConstruct.create('div', {id: "medical_and_surgical_history_list"}, "patientMedicalAndSurgicalHistoryTab", "first");

      domConstruct.create('div', {id: "patientPreventiveHealthTab"}, "patientContextTabs", "last");
        
        domConstruct.create('div', {id: "patientPreventiveTabs"}, "patientPreventiveHealthTab", "first");
        
          domConstruct.create('div', {id: "patientNeonatalAndPaediatricExamTab"}, "patientPreventiveTabs", "first");
            domConstruct.create('div', {id: "neonatal_and_paediatric_exam_list"}, "patientNeonatalAndPaediatricExamTab", "first");
        
          domConstruct.create('div', {id: "patientImmunisationTab"}, "patientPreventiveTabs", "last");
            domConstruct.create('div', {id: "immunisation_list"}, "patientImmunisationTab", "last");
        
          domConstruct.create('div', {id: "patientObstetricsPreventivesTab"}, "patientPreventiveTabs", "last");
            domConstruct.create('div', {id: "obstetrics_preventives_list"}, "patientObstetricsPreventivesTab", "first");
        
          domConstruct.create('div', {id: "patientGynaecologyPreventivesTab"}, "patientPreventiveTabs", "last");
            domConstruct.create('div', {id: "gynaecology_preventives_list"}, "patientGynaecologyPreventivesTab", "first");
        
          domConstruct.create('div', {id: "patientMedicalPreventivesTab"}, "patientPreventiveTabs", "last");
            domConstruct.create('div', {id: "medical_preventives_list"}, "patientMedicalPreventivesTab", "first");

      domConstruct.create('div', {id: "patientMedicationListAndAllergiesTab"}, "patientContextTabs", "last");
        
          domConstruct.create('div', {id: "medication_list"}, "patientMedicationListAndAllergiesTab", "first");
        
          domConstruct.create('div', {id: "allergy_list"}, "patientMedicationListAndAllergiesTab", "last");

      domConstruct.create('div', {id: "patientAdmissionAndVisitsTab"}, "patientContextTabs", "last");
        
          domConstruct.create('div', {id: "admission_list"}, "patientAdmissionAndVisitsTab", "first");
        
          domConstruct.create('div', {id: "visit_list"}, "patientAdmissionAndVisitsTab", "last");

      domConstruct.create('div', {id: "patientMediaTab"}, "patientContextTabs", "last");
        
          domConstruct.create('div', {id: "patient_media_list"}, "patientMediaTab", "first");


      var mainContainer = new ContentPane({id     : "patientContextContainer",
                                             region  : "bottom",
                                             style :"min-height: 550px; overflow:auto;"
                                            }, 
                                          "patientContextContainer"
        );

      var tabs = new TabContainer({ 
                                    id: "patientContextTabs",
                                    tabPosition:"top",
                                    tabStrip:true,
                                    style : "min-height: 550px;overflow:auto;"
                                   },
                                   "patientContextTabs"
                                  );

      mainContainer.addChild(tabs);

      var contactTab = new ContentPane({id:"patientContactTab",
                                         title:"Contact"
                                        },
                                        "patientContactTab"
                                        );
      tabs.addChild(contactTab);
      var historyTab = new ContentPane({id:"patientHistoryTab",
                                         title:"History"
                                        },
                                        "patientHistoryTab"
                                        );
      tabs.addChild(historyTab);
        var historyTabs = new TabContainer({id:"patientHistoryTabs",
                                            tabPosition:"top",
                                            tabStrip:true,
                                            style : "min-height: 550px;overflow:auto;"        
                                          },
                                          "patientHistoryTabs"
                                          );
        historyTab.addChild(historyTabs);
          var demographicsTab = new ContentPane({id:"patientDemographicsTab",
                                             title:"Demographics"
                                            },
                                            "patientDemographicsTab"
                                            );
          historyTabs.addChild(demographicsTab);
            var demographicsAddOrEditForm = new ContentPane({id:"demographics_add_or_edit_form"
                                              },
                                              "demographics_add_or_edit_form"
                                              );
            demographicsTab.addChild(demographicsAddOrEditForm);
          var socialHistoryTab = new ContentPane({id:"patientSocialHistoryTab",
                                             title:"Social"
                                            },
                                            "patientSocialHistoryTab"
                                            );
          historyTabs.addChild(socialHistoryTab);
          var familyHistoryTab = new ContentPane({id:"patientFamilyHistoryTab",
                                             title:"Family"
                                            },
                                            "patientFamilyHistoryTab"
                                            );
          historyTabs.addChild(familyHistoryTab);
          var medicalAndSurgicalHistoryTab = new ContentPane({id:"patientMedicalAndSurgicalHistoryTab",
                                             title:"Medical & Surgical"
                                            },
                                            "patientMedicalAndSurgicalHistoryTab"
                                            );
          historyTabs.addChild(medicalAndSurgicalHistoryTab);

      var preventiveHealthTab = new ContentPane({id:"patientPreventiveHealthTab",
                                                 title:"Preventive Health"
                                                },
                                                "patientPreventiveHealthTab"
                                                );
      tabs.addChild(preventiveHealthTab);
        var preventiveHealthTabs = new TabContainer({id:"patientPreventivesTabs",
                                                      tabPosition:"top",
                                                      tabStrip:true,
                                                      style : "min-height: 550px;overflow:auto;"
                                                  },
                                                  "patientPreventiveTabs"
                                                  );
        preventiveHealthTab.addChild(preventiveHealthTabs);
          var patientNeonatalAndPaediatricTab = new ContentPane({id:"patientNeonatalAndPaediatricExamTab",
                                                       title:"Neonatal & Paediatric"
                                                      },
                                                      "patientNeonatalAndPaediatricExamTab"
                                                      );
          preventiveHealthTabs.addChild(patientNeonatalAndPaediatricTab);
          var patientImmunisationTab = new ContentPane({id:"patientImmunisationTab",
                                                     title:"Immunisation"
                                                    },
                                                    "patientImmunisationTab"
                                                    );
          preventiveHealthTabs.addChild(patientImmunisationTab);
          var patientObstetricsPreventivesTab = new ContentPane({id:"patientObstetricsPreventivesTab",
                                                       title:"Obstetrics"
                                                      },
                                                      "patientObstetricsPreventivesTab"
                                                      );
          preventiveHealthTabs.addChild(patientObstetricsPreventivesTab);
          var patientGynaecologyPreventivesTab = new ContentPane({id:"patientGynaecologyPreventivesTab",
                                                       title:"Gynaecology"
                                                      },
                                                      "patientGynaecologyPreventivesTab"
                                                      );
          preventiveHealthTabs.addChild(patientGynaecologyPreventivesTab);
          var patientMedicalPreventivesTab      = new ContentPane({id:"patientMedicalPreventivesTab",
                                                       title:"Medical & Surgical"
                                                      },
                                                      "patientMedicalPreventivesTab"
                                                      );
          preventiveHealthTabs.addChild(patientGynaecologyPreventivesTab);

      var medicationAndAllergiesTab = new ContentPane({id:"patientMedicationListAndAllergiesTab",
                                                       title:"Medications & Allergies"
                                                      },
                                                      "patientMedicationListAndAllergiesTab"
                                                      );
      tabs.addChild(medicationAndAllergiesTab);
      var admissionAndVisitTab      = new ContentPane({id:"patientAdmissionAndVisitsTab",
                                                       title:"Admissions & Visits"
                                                      },
                                                      "patientAdmissionAndVisitsTab"
                                                      );
      tabs.addChild(admissionAndVisitTab);
      var mediaTab                 = new ContentPane({id:"patientMediaTab",
                                                       title:"Media"
                                                      },
                                                      "patientMediaTab"
                                                      );
      tabs.addChild(mediaTab);

     mainContainer.startup();
     tabs.startup();
     historyTabs.startup();
     preventiveHealthTabs.startup();

    registry.byId("centerMainPane").resize();
    }
   });
});

}

//patientContextTabSetup();
