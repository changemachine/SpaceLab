spacelab.factory('PlotFactory', function PlotFactory() {
    var factory = {};



    //LIST OF VARIABLE PLOT ELEMENTS/EVENTS--------------------------------------------


    //GENERAL
    factory.message = " ";  //DEFAULT SETTING FOR DIALOG BOX


    //MAIN ROOM
    factory.lights_main = 0; //LIGHTS OFF (DEFAULT). BECOMES 1 TO SWITCH SCENE TO 'LIGHTS ON'
    factory.lori = 0;  //LORI GIVES INITIAL MESSAGE. BECOMES '1' AFTER YOU TALK TO HER, SWITCHES TO 'DEFAULT MESSAGE'
    factory.murder_weapon = 0; //MURDER WEAPON STILL IN BODY. WHEN USER 'USES' WEAPON, IT'S SET TO 1 AND REMOVED

    factory.pavels_body = 0; // BECOMES '1' WHEN USER 'USES' OR EXAMINES PAVEL'S BODY
                            //ALSO SWITCHES TO CLOSE-UP OF PAVEL'S BODY

    factory.door = 0; //BECOMES '1' WHEN USER 'USES' KEYCARD ON PAVEL'S DOOR

    // VIEW OF PAVEL'S BODY
    factory.pavels_hand = 0;  //BECOMES '1' WHEN USER REMOVES DOG TAGS
    factory.keycard = 0;   //BECOMES '1' WHEN USER 'USES' PAVEL'S RIGHT POCKET

    //PAVEL'S QUARTERS
    factory.lights_pavels_quarters = 0;  //DEFAULT 'DARK' SETTING. BECOMES '1' WHEN USER 'USES' LIGHTS
    factory.mirror = 0; //BECOMES '1' WHEN USER EXAMINES/USES MIRROR. CHANGES SCENE TO 'MIRROR'
    factory.lockbox = 0; //BECOMES '1' WHEN USER 'USES' (TAKES) THE LOCKBOX



    //STARTING VIEW---------------------------------------------------------------------
    factory.use_lights = function () {                          //TURN ON LIGHTS
        factory.lights_main = 1;
    };

    factory.examine_lights_off = function () {
      factory.message = "IT'S HARD TO TELL, BUT I THINK IT'S A LIGHT SWITCH.";
    };

    //LIGHTS ON VIEW----------------------------------------------------------
    factory.examine_body = function () {//LOOK AT BODY
        factory.pavels_body = 1;
    };

    factory.use_body = function () {
        factory.pavels_body = 1;  //TAKES USER TO CRIME SCENE/BODY SCENE. DOES THE SAME AS 'EXAMINE BODY'
    };

    factory.examine_lights_on = function () {
      factory.message = "IT'S THE LIGHT SWITCH. I THINK I'LL KEEP 'EM ON.'";
    };

    factory.use_lights_on = function () {
      factory.message = "I THINK I LIKE THE LIGHTS ON";
    };

    factory.examine_lori = function () {
      factory.message = "IT'S L.O.R.I. SHE'S THE A.I. THAT MONITORS SHIP FUNCTIONS.";
    };

    factory.use_lori_initial_message = function () {
      factory.lori = 1;  //THIS MESSAGE ONLY APPEARS THE FIRST TIME YOU 'USE' LORI
      factory.message = "HI CAPTAIN, I'M L.O.R.I., LINGUISTICALLY OPERERATED ROBOT INTELLIGENCE. I CONTROL THE SHIP'S FUNCTIONS DURING YOUR CRYOSLEEP AND WILL OCCASIONALLY GIVE YOU HINTS THROUGHOUT YOUR MISSION. CLICK THE MAGNIFYING GLASS AT THE BOTTOM OF THE SCREEN TO ACTIVATE THE 'EXAMINE' CURSOR, THEN CLICK ITEMS YOU'D LIKE TO INSPECT. CLICK THE 'HAND' ICON TO ACTIVATE THE 'USE' CURSOR, THEN CLICK ITEMS YOU'D LIKE TO PICK UP, USE, OR MANIPULATE. THE BOX IN THE BOTTOM RIGHT CORNER OF THE SCREEN INDICATES YOUR INVENTORY. CLICK IT TO SEE WHAT ITEMS YOU HAVE ON YOU. WITHIN THE INVENTORY YOU CAN SELECT AN ITEM. WHEN YOU EXIT YOUR INVENTORY, YOUR SELECTED ITEM WILL APPEAR IN THE BOTTOM LEFT CORNER OF THE SCREEN.";
    };

    factory.use_lori_default_message = function () {  //THIS MESSAGE APPEARS EVERY TIME AFTER 'INITIAL'
      factory.message = "'L.O.R.I., WHAT HAPPENED HERE?' . . . LORI: 'YOU TOLD ME NOT TO ANSWER THAT QUESTION FOR ANYONE, SIR. NOT EVEN YOU.'";
    };

    factory.examine_blue_door = function () {
      factory.message = "THE NAMEPLATE READS 'PAVEL KOSLOV.'";
    };

    //PAVEL'S BODY------------------------------------------------------
    // factory.examine_murder_weapon = function () {
    //   factory.message = "IT'S A LARGE TACTICAL KNIFE. CURRENTLY STUCK HALFWAY INTO PAVEL'S SEPTUM.";
    // };
    //
    // factory.use_murder_weapon = function () {
    //   factory.muder_weapon = 1; //REMOVES MURDER WEAPON FROM SCENE IN BOTH CLOSE-UP AND MAIN SCENES
    // };

    //HAND
    // factory.examine_pavels_hand = function () {
    //     factory.message = "IT APPEARS TO BE HOLDING SOMETHING.";
    // };
    //
    // factory.use_pavels_hand = function () {
    //     factory.pavels_hand = 1;   //REMOVES DOG TAGS; TRIGGERS NEXT TO FUNCTION RESPONSES IF ATTEMPTED
    //     factory.message = "HE WAS HOLDING SOMEONE'S DOG TAGS";
    // };
    // factory.examine_pavels_empty_hand = function () {
    //     factory.message = "IT'S EMPTY.";
    // };
    // factory.use_pavels_empty_hand = function () {
    //     factory.message = "IT'S EMPTY.";
    // };
    // factory.examine_lockbox = function () {
    //     factory.message = "IT'S AN EERIE LITTLE BOX OF INDETERMINATE MATERIAL. IT'S LOCKED.";
    // };
    // //RIGHT POCKET (CONTAINS KEYCARD)
    // factory.examine_pavels_right_pocket = function () {
    //     factory.message = "THERE IS SOMETHING INSIDE. IT FEELS HARD.";
    // };
    // factory.use_pavels_right_pocket = function () {
    //   factory.keycard = 1;  //REMOVES KEYCARD; TRIGGERS THE NEXT TWO FUNCTIONS IF ATTEMPTED BY USER
    //   factory.message = "I REMOVED SOMETHING: IT'S THE KEYCARD TO PAVEL'S QUARTERS.";
    // };
    // factory.examine_pavels_empty_right_pocket = function () {
    //     factory.message = "HE ISN'T HOLDING ANYTHING ELSE";
    // };
    // factory.use_pavels_empty_right_pocket = function () {
    //     factory.message = "HE ISN'T HOLDING ANYTHING ELSE";
    // };
    //
    // factory.examine_keycard = function () {
    //     factory.message = "IT'S A KEYCARD. ON THE SIDE IT SAYS 'PAVEL KOSLOV'.";
    // };

    //MAIN ROOM, AFTER ATTAINING KEYCARD------------------------------------
    // factory.use_keycard_on_door = function () { //UNLOCK BLUE DOOR
    //     factory.door = 1;
    //     factory.message = "DOOR UNLOCKED.";
    // };
    // //PAVEL'S ROOM----------------------------------------------------------
    // factory.examine_pda = function () {
    //   factory.message = "IT'S PAVEL'S PERSONAL DATA ASSISTANT.";
    // };
    // factory.use_pda = function () {
    //   factory.pda = 1;  //REMOVES PDA FROM SCENE
    // };
    // factory.examine_towel = function () {
    //   factory.message = "IT'S A TOWEL. DON'T LEAVE HOME WITHOUT IT.";
    // };
    // factory.use_towel = function () {
    //   factory.towel = 1; //REMOVES TOWEL FROM SCENE
    // };
    // factory.examine_lockbox = function () {
    //   factory.message = "IT'S AN EERIE LITTLE BOX OF INDETERMINATE MATERIAL.";
    // };
    // factory.use_lockbox = function () {
    //   factory.lockbox = 1; //REMOVES LOCKBOX FROM THE SCENE
    // };
    // factory.examine_mirror = function () {
    //   factory.mirror = 1;
    // };
    //                                       //BOTH THESE FUNCTIONS SWITCH TO 'PAVEL'S MIRROR' SCENE
    // factory.use_mirror = function () {
    //   factory.mirror = 1;
    // };

    //PAVEL'S MIRROR (END OF DEMO)-----------------------------------------
  return factory;

});
