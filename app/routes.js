//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/who-answer', function(request, response) {

    var who = request.session.data['who']
    if (who == "None"){
        response.redirect("eligibility-arrangement")
    } else {
        response.redirect("/eligibility-foreign")
    }
})

router.post('/arrangement-answer', function(request, response) {

    var who = request.session.data['arrangement']
    if (who == "Yes"){
        response.redirect("eligibility-party")
    } else {
        response.redirect("/eligibility-no")
    }
})

router.post('/party-answer', function(request, response) {

    var who = request.session.data['party']
    if (who == "Yes"){
        response.redirect("eligibility-party-yes")
    } else {
        response.redirect("/eligibility-direction")
    }
})

router.post('/direction-answer', function(request, response) {

    var who = request.session.data['direction']
    if (who == "Yes"){
        response.redirect("eligibility-election")
    } else {
        response.redirect("/eligibility-no")
    }
})

router.post('/election-answer', function(request, response) {

    var who = request.session.data['election']
    if (who == "Yes"){
        response.redirect("eligibility-yes")
    } else {
        response.redirect("/eligibility-minister")
    }
})

router.post('/minister-answer', function(request, response) {

    var who = request.session.data['minister']
    if (who == "Yes"){
        response.redirect("eligibility-yes")
    } else {
        response.redirect("/eligibility-political")
    }
})

router.post('/political-answer', function(request, response) {

    var who = request.session.data['political']
    if (who == "Yes"){
        response.redirect("eligibility-yes")
    } else {
        response.redirect("/eligibility-member")
    }
})

router.post('/member-answer', function(request, response) {

    var who = request.session.data['member']
    if (who == "Yes"){
        response.redirect("eligibility-yes")
    } else {
        response.redirect("/eligibility-no")
    }
})

router.post('/myself-answer', function(request, response) {

    var who = request.session.data['myselfSomeone']
    if (who == "someone-else"){
        response.redirect("/register/account-contact-legal")
    } else {
        response.redirect("/register/prove-yes-no")
    }
})

router.post('/security-answer', function(request, response) {

    var who = request.session.data['securityCodes']
    if (who == "authenticator"){
        response.redirect("/register/authenticator-app")
    } else {
        response.redirect("/register/enter-phone")
    }
})

router.post('/who-are-you-answer', function(request, response) {

    var who = request.session.data['whoAreYouRegistering']
    if (who == "individual"){
        response.redirect("/register/specified-person")
    } else {
        response.redirect("#")
    }
})

router.post('/prove-yes-or-no-answer', function(request, response) {

    var who = request.session.data['proveIdentity']
    if (who == "yes"){
        response.redirect("/register/prove-your-identity")
    } else {
        response.redirect("register/account-create")
    }
})

router.post('/check-identity-document-answer', function(request, response) {

    var who = request.session.data['checkDoc']
    if (who == "onlinePost"){
        response.redirect("/register/send-identity-document-post")
    } else {
        response.redirect("register/use-app")
    }
})

router.post('/activity-known-answer', function(request, response) {

    var who = request.session.data['activityKnown']
    if (who == "no"){
        response.redirect("/activity/activity-frequency")
    } else {
        response.redirect("activity/activity-end")
    }
})

router.post('/activity-type-answer', function(request, response) {

    var who = request.session.data['activityType']
    if (who == "Private"){
        response.redirect("communication/communication-name")
    } else if (who == "Public"){
        response.redirect("public/public-publication")
    } else {
        response.redirect("disbursement/disbursement-nature")
    }
})

// ALTERNATE USER JOURNEY FOR 3 ACTIVITIES

router.post('/activities/activity-check-private', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Private")){
        response.redirect("/activities-alt-simple/communication-name")
    } else if (type.includes("Public"))  {
        response.redirect("/activities-alt-simple/public-publication")
    } else if (type.includes("Money"))  {
        response.redirect("/activities-alt-simple/disbursement-nature")
    } else {
        response.redirect("/arrangement-alt-simple/arrangement-overview")
    }
})

router.post('/activities/activity-check-public', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Public"))  {
        response.redirect("/activities-alt-simple/public-publication")
    } else if (type.includes("Money"))  {
        response.redirect("/activities-alt-simple/disbursement-nature")
    } else {
        response.redirect("/arrangement-alt-simple/arrangement-overview")
    }
})

router.post('/activities/activity-check-money', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Money"))  {
        response.redirect("/activities-alt-simple/disbursement-nature")
    } else {
        response.redirect("/arrangement-alt-simple/arrangement-overview")
    }

})

// ALTERNATE USER JOURNEY TWO

router.post('/alternate-route-2/activity-check-private', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Private")){
        response.redirect("/alternate-route-2/communication-name")
    } else if (type.includes("Public"))  {
        response.redirect("/alternate-route-2/public-publication")
    } else if (type.includes("Money"))  {
        response.redirect("/alternate-route-2/disbursement-nature")
    } else {
        response.redirect("/alternate-route-2/arrangement-overview")
    }
})

router.post('/alternate-route-2/activity-check-public', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Public"))  {
        response.redirect("/alternate-route-2/public-publication")
    } else if (type.includes("Money"))  {
        response.redirect("/alternate-route-2/disbursement-nature")
    } else {
        response.redirect("/alternate-route-2/arrangement-overview")
    }
})

router.post('/alternate-route-2/activity-check-money', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("Money"))  {
        response.redirect("/alternate-route-2/disbursement-nature")
    } else {
        response.redirect("/alternate-route-2/arrangement-overview")
    }

})

// BETA

// router.use((req, res, next) => {
//   const log = {
//     method: req.method,
//     url: req.originalUrl, //URL of page
//     data: req.session.data //all data held
//   }
//   console.log(JSON.stringify(log, null, 2)) // show all data as a dump in terminal
//   next() // continue to next action

// })

// ARRANGEMENT

//// Stream 1
router.post('/beta/arrangement/arrangement-stream-1', function(request, response) {

    var s1 = request.session.data['arrangement-stream-1']
    if (s1 == "yes"){
        response.redirect("/beta/arrangement/stream-1-entities?arrangement-tier=enhanced")
    } else {
        response.redirect("/beta/arrangement/stream-2")
    }
})

//// Stream 2
router.post('/beta/arrangement/arrangement-stream-2', function(request, response) {

    var s2 = request.session.data['arrangement-stream-2']
    if (s2 == "yes"){
        response.redirect("/beta/arrangement/stream-2-foreign-power-question")
    } else {
        response.redirect("/beta/arrangement/stream-3")
    }
})
router.post('/beta/arrangement/stream-2-foreign-power-route', function(request, response) {

    var s2 = request.session.data['arrangement-stream-2-question']
    if (s2 == "yes"){
        response.redirect("/beta/arrangement/stream-2-foreign-power-name?arrangement-tier=enhanced")
    } else {
        response.redirect("/beta/arrangement/stream-2-foreign-power-name?arrangement-tier=political")
    }
})

//// Stream 3
router.post('/beta/arrangement/arrangement-stream-3', function(request, response) {

    var s3 = request.session.data['arrangement-stream-3']
    if (s3 == "yes"){
        response.redirect("/beta/arrangement/stream-3-entities?arrangement-tier=enhanced")
    } else {
        response.redirect("/beta/arrangement/stream-3-foreign-power-name?arrangement-tier=political")
    }
})


  
// PRIVATE

router.post('/beta/activities/start', function(request, response) {

    var type = request.session.data['activityTypes']
    if (type.includes("communication")){
        response.redirect("/beta/activities/communication/activity-industry?activity-stream=communication")
    } else if (type.includes("public"))  {
        response.redirect("/beta/activities/public/activity-industry?activity-stream=public")
    } else if (type.includes("disbursement"))  {
        response.redirect("/beta/activities/disbursement/activity-industry?activity-stream=disbursement")
    } else if (type.includes("other"))  {
        response.redirect("/beta/activities/other/start?activity-stream=other")
    } else {
        response.redirect("/beta/activities/overview")
    }
})


// Do you know when the activity will end? Yes/No/Already
router.post('/beta/activities/communication/activity-end-answer', function(request, response) {

    var end = request.session.data['activityKnown-communication']
    if (end == "no"){
        response.redirect("/beta/activities/communication/activity-frequency?activity-ended=no")
    } else if (end == "yes")  {
        response.redirect("/beta/activities/communication/activity-end?activity-ended=no")
    } else {
        response.redirect("/beta/activities/communication/activity-end?activity-ended=yes")
    }
})


// Will you be conducting the activity? Yes/No
router.post('/beta/activities/communication/activity-you-route', function(request, response) {

    var you = request.session.data['activityWho-communication']
    if (you == "yes"){
        response.redirect("/beta/activities/communication/activity-anyone-else")
    } else {
        response.redirect("/beta/activities/communication/activity-who-else")
    }
})

// Will anyone else be involved in conducting the activity? Yes/No
router.post('/beta/activities/communication/activity-anyone-else-route', function(request, response) {

    var whoElse = request.session.data['activityAnyoneElse-communication']
    if (whoElse == "no"){
        response.redirect("/beta/activities/communication/communication-name")
    } else {
        response.redirect("/beta/activities/communication/activity-who-else")
    }
})


// PUBLIC 

router.post('/beta/activities/public/activity-end-answer', function(request, response) {

    var end = request.session.data['activityKnown-public']
    if (end == "no"){
        response.redirect("/beta/activities/public/activity-frequency?activity-ended=no")
    } else if (end == "yes")  {
        response.redirect("/beta/activities/public/activity-end?activity-ended=no")
    } else {
        response.redirect("/beta/activities/public/activity-end?activity-ended=yes")
    }
})

// Do you know when the activity will end? Yes/No/Already
router.post('/beta/activities/public/activity-end-answer', function(request, response) {

    var end = request.session.data['activityKnown-public']
    if (end == "no"){
        response.redirect("/beta/activities/public/activity-frequency?activity-ended=no")
    } else if (end == "yes")  {
        response.redirect("/beta/activities/public/activity-end?activity-ended=no")
    } else {
        response.redirect("/beta/activities/public/activity-end?activity-ended=yes")
    }
})


// Will you be conducting the activity? Yes/No
router.post('/beta/activities/public/activity-you-route', function(request, response) {

    var you = request.session.data['activityWho-public']
    if (you == "yes"){
        response.redirect("/beta/activities/public/activity-anyone-else")
    } else {
        response.redirect("/beta/activities/public/activity-who-else")
    }
})

// Will anyone else be involved in conducting the activity? Yes/No
router.post('/beta/activities/public/activity-anyone-else-route', function(request, response) {

    var whoElse = request.session.data['activityAnyoneElse-public']
    if (whoElse == "no"){
        response.redirect("/beta/activities/public/public-publication")
    } else {
        response.redirect("/beta/activities/public/activity-who-else")
    }
})


// MONEY

router.post('/beta/activities/disbursement/activity-end-answer', function(request, response) {

    var end = request.session.data['activityKnown-disbursement']
    if (end == "no"){
        response.redirect("/beta/activities/disbursement/activity-frequency?activity-ended=no")
    } else if (end == "yes")  {
        response.redirect("/beta/activities/disbursement/activity-end?activity-ended=no")
    } else {
        response.redirect("/beta/activities/disbursement/activity-end?activity-ended=yes")
    }
})

// Do you know when the activity will end? Yes/No/Already
router.post('/beta/activities/disbursement/activity-end-answer', function(request, response) {

    var end = request.session.data['activityKnown-disbursement']
    if (end == "no"){
        response.redirect("/beta/activities/disbursement/activity-frequency?activity-ended=no")
    } else if (end == "yes")  {
        response.redirect("/beta/activities/disbursement/activity-end?activity-ended=no")
    } else {
        response.redirect("/beta/activities/disbursement/activity-end?activity-ended=yes")
    }
})


// Will you be conducting the activity? Yes/No
router.post('/beta/activities/disbursement/activity-you-route', function(request, response) {

    var you = request.session.data['activityWho-disbursement']
    if (you == "yes"){
        response.redirect("/beta/activities/disbursement/activity-anyone-else")
    } else {
        response.redirect("/beta/activities/disbursement/activity-who-else")
    }
})

// Will anyone else be involved in conducting the activity? Yes/No
router.post('/beta/activities/disbursement/activity-anyone-else-route', function(request, response) {

    var whoElse = request.session.data['activityAnyoneElse-disbursement']
    if (whoElse == "no"){
        response.redirect("/beta/activities/disbursement/disbursement-nature")
    } else {
        response.redirect("/beta/activities/disbursement/activity-who-else")
    }
})



//// ADD ANOTHER ACTIVITY PEOPLE
router.post('/beta/activities/person/activity-person-check', function(request, response) {

    var who = request.session.data['activity-person-check']

    if (who.includes("me")){
        response.redirect("/beta/activities/person/activity-person-role")
    } else if (who.includes("organisation")) {
        response.redirect("/beta/activities/person/activity-person-role")
    } else {
        response.redirect("/beta/activities/person/activity-add-multiple-people")
    }
})

router.post('/beta/activities/person/activity-people-check', function(request, response) {

    var who = request.session.data['activity-person-check']

    if (who.includes("other")){
        response.redirect("/beta/activities/person/activity-add-multiple-people")
    } else {
        response.redirect("/beta/activities/person/activity-date")
    }
})





/// JOURNEY 

var root = '/journey/v1/';
var account = '/journey/v1/account/';
var registration = '/journey/v1/registration/';
var arrangement = '/journey/v1/arrangement/';
var activity = '/journey/v1/activity/';


/// JOURNEY / ACCOUNT

// Are you a setting up this account for yourself, a corporate body, an unincorporated association, or a foreign power?
router.post('/route/1-1', function(request, response) {
    var value = request.session.data['v1-1']
    if (value == "Yourself"){ 
        response.redirect(account+"1-2-0")
    } else if (value == ("Corporate body")) {
        response.redirect(account+"1-3-0")
    } else {
        response.redirect(account+"1-4-0")
    }
})

// Do you have a different correspondence address? - YOURSELF ROUTE
router.post('/route/1-2-2', function(request, response) {
    var value = request.session.data['v1-2-2']
    if (value == "Yes"){ 
        response.redirect(account+"1-2-3")
    } else {
        response.redirect(account+"1-2-4")
    }
})

// Is the name the body corporate uses publicly for day-to-day operations different from the trading name? - BODY CORP
router.post('/route/1-3-1', function(request, response) {
    var value = request.session.data['v1-3-1']
    if (value == "Yes"){ 
        response.redirect(account+"1-3-2")
    } else {
        response.redirect(account+"1-3-3")
    }
})

// Does the body corporate have a registered address? - BODY CORP
router.post('/route/1-3-3', function(request, response) {
    var value = request.session.data['v1-3-3']
    if (value == "Yes"){ 
        response.redirect(account+"1-3-5")
    } else {
        response.redirect(account+"1-3-4")
    }
})

// Does the body corporate have a different correspondance address? - BODY CORP
router.post('/route/1-3-6', function(request, response) {
    var value = request.session.data['v1-3-6']
    if (value == "Yes"){ 
        response.redirect(account+"1-3-7")
    } else {
        response.redirect(account+"1-3-8")
    }
})

// Does the unincorporated association have a different correspondance address? - UNICORP ASSOC
router.post('/route/1-4-2', function(request, response) {
    var value = request.session.data['v1-4-2']
    if (value == "Yes"){ 
        response.redirect(account+"1-4-3")
    } else {
        response.redirect(account+"1-4-4")
    }
})






/// JOURNEY / REGISTRATION

// Personal details
router.post('/group/2-G1', function(request, response) {
    response.redirect(registration+"2-G1-1")
})

// ID Verification 
router.post('/group/2-G2', function(request, response) {
    response.redirect(registration+"2-G2-1")
})

// Body corporate details 
router.post('/group/2-G3', function(request, response) {
    response.redirect(registration+"2-G3-1")
})

// Unincorporated association details 
router.post('/group/2-G4', function(request, response) {
    response.redirect(registration+"2-G4-1")
})

// foreign power details 
router.post('/group/2-G5', function(request, response) {
    response.redirect(registration+"2-G5-1")
})


// Are you registering for:
router.post('/route/2-0', function(request, response) {
    var value = request.session.data['v2-0']
    if (value == "Yourself"){ 
        response.redirect(registration+"2-1-0?mode=self&reg-type=individual")
    } else if (value == ("Your Corporate Body")) {
        response.redirect("/group/4-G3?mode=self&reg-type=body-corp")
    } else if (value == ("Your Unicorporated Association")) {
        response.redirect("/group/4-G4?mode=self&reg-type=unincorp")
    } else if (value == ("A Foreign Power")) {
        response.redirect("/group/4-G5?mode=self&reg-type=foreign-power")
    } 
      else if (value == ("Individual")) {
        response.redirect(registration+"2-5-0?mode=on-behalf&reg-type=individual")
    } else if (value == ("Corporate body")) {
        response.redirect(registration+"2-6-0?mode=on-behalf&reg-type=body-corp")
    } else if (value == ("Unincorporated association")) {
        response.redirect(registration+"2-7-0?mode=on-behalf&reg-type=unincorp")
    }
})




/// JOURNEY / ARRANGEMENT

// Are you in an arrangement with a foreign power?
router.post('/route/3-0', function(request, response) {

    var value = request.session.data['v3-0']
    if (value == "yes"){ 
        response.redirect(arrangement+"3-1")
    } else { 
        response.redirect(arrangement+"3-4")
    }
})

// Are you in an arrangement with a foreign power listed below?
router.post('/route/3-1', function(request, response) {

    var value = request.session.data['v3-1']
    if (value == "yes"){ 
        response.redirect(arrangement+"3-2?tier=enhanced")
    } else { 
        response.redirect(arrangement+"3-3?tier=political")
    }
})

// Are you in an arrangement with a foreign power?
router.post('/route/3-4', function(request, response) {
    var value = request.session.data['v3-4'];
    var type = request.session.data['registrant-type'];
    if (value == "yes"){ 
        response.redirect(arrangement+"3-4-1?tier=enhanced")
    } else { // exit
        if (type == "individual") {
            response.redirect(arrangement+"3-6")
        } else {
            response.redirect(arrangement+"3-5")            
        }
    }
})

// Are you a salaried employee of a foreign power controlled organisation listed below? 
router.post('/route/3-5', function(request, response) {
    var value = request.session.data['v3-5']
    if (value == "yes"){ 
        response.redirect(arrangement+"3-5-1?tier=enhanced")
    } else { // exit
        response.redirect(arrangement+"3-6")
    }
})


/// JOURNEY / ACTIVITY

// Person or entity 'doing'
router.post('/group/4-G1', function(request, response) {
    response.redirect(activity+"4-G1-1")
})

// Dates and frequency 
router.post('/group/4-G2', function(request, response) {
    response.redirect(activity+"4-G2-1")
})

// Is this activity intended to influence:
router.post('/route/4-0', function(request, response) {

    var value = request.session.data['v4-0']
    if (value == "yes"){ // state type of political activity
        response.redirect(activity+"4-0-1")
    } else { // 'other' type
        response.redirect(activity+"4-5")
    }
})

// What type of influencing activity do you want to register?
router.post('/route/4-1', function(request, response) {

    var value = request.session.data['v4-1']
    if (value.includes("private")){
        response.redirect(activity+"4-2")
    } else if (value.includes("public")) {
        response.redirect(activity+"4-3")
    } else {
        response.redirect(activity+"4-4")
    }
})

/// JOURNEY / ACTIVITY / GROUPS


// Will you be personally involved in the activity?
router.post('/route/4-G1-1--t2', function(request, response) {

    var value = request.session.data['v4-G1-1--t2']
    if (value == "yes"){
        response.redirect(activity+"4-G1-2")
    } else {
        response.redirect(activity+"4-G1-3")
    }
})
router.post('/route/4-G1-1--t3', function(request, response) {

    var value = request.session.data['v4-G1-1--t3']
    if (value == "yes"){
        response.redirect(activity+"4-G1-2")
    } else {
        response.redirect(activity+"4-G1-3")
    }
})
router.post('/route/4-G1-1--t4', function(request, response) {

    var value = request.session.data['v4-G1-1--t4']
    if (value == "yes"){
        response.redirect(activity+"4-G1-2")
    } else {
        response.redirect(activity+"4-G1-3")
    }
})
router.post('/route/4-G1-1--t5', function(request, response) {

    var value = request.session.data['v4-G1-1--t5']
    if (value == "yes"){
        response.redirect(activity+"4-G1-2")
    } else {
        response.redirect(activity+"4-G1-3")
    }
})

// Will anyone else be involved in this activity?
router.post('/route/4-G1-2--t2', function(request, response) {
    var value = request.session.data['v4-G1-2--t2'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity+"4-G1-3")
    } else {
        response.redirect(activity+"4-2-1")
    }
})
// Will anyone else be involved in this activity?
router.post('/route/4-G1-2--t3', function(request, response) {
    var value = request.session.data['v4-G1-2--t3'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity+"4-G1-3")
    } else {
        // Drop out of Group 1
        response.redirect(activity+"4-3-1")
    }
})
// Will anyone else be involved in this activity?
router.post('/route/4-G1-2--t4', function(request, response) {
    var value = request.session.data['v4-G1-2--t4'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity+"4-G1-3")
    } else {
        // Drop out of Group 1
        response.redirect(activity+"4-4-2")
    }
})
// Will anyone else be involved in this activity?
router.post('/route/4-G1-2--t5', function(request, response) {
    var value = request.session.data['v4-G1-2--t5'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity+"4-G1-3")
    } else {
        response.redirect(activity+"4-G2-1")
    }
})
// router.post('/route/4-G1-return', function(request, response) {
//     var stream = request.session.data['stream'];
//     if (stream == 2) {
//         response.redirect(version+"4-2-1")
//     } else if (stream == 3) {
//         response.redirect(version+"4-3-1")
//     } else  {
//         response.redirect(version+"4-4-2")
//     }
// })


router.post('/route/4-G1-return-2', function(request, response) {
    response.redirect(activity+"4-2-1")
})
router.post('/route/4-G1-return-3', function(request, response) {
    response.redirect(activity+"4-3-1")
})
router.post('/route/4-G1-return-4', function(request, response) {
    response.redirect(activity+"4-4-2")
})
router.post('/route/4-G1-return-5', function(request, response) {
    response.redirect(activity+"4-G2-1")
})

router.post('/route/4-G2-return', function(request, response) {
    var stream = request.session.data['stream'];
    if (stream == 2) {
        response.redirect(activity+"4-2-2")
    } else if (stream == 3) {
        response.redirect(activity+"4-3-3")
    } else if (stream == 4) {
        response.redirect(activity+"4-4-3")
    } else  {
        response.redirect(activity+"4-5-1")
    }
})


