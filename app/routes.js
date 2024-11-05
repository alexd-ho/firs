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
var agreement = '/journey/v1/agreement/';
var activity = '/journey/v1/activity/';
var exception = '/journey/v1/exception/';


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
        response.redirect(registration+"2-G3-1?mode=self&reg-type=body-corp")
    } else if (value == ("Your Unicorporated Association")) {
        response.redirect(registration+"2-G4-1?mode=self&reg-type=unincorp")
    } else if (value == ("A Foreign Power")) {
        response.redirect(registration+"2-G5-1?mode=self&reg-type=foreign-power")
    } 
      else if (value == ("Individual")) {
        response.redirect(registration+"2-5-0?mode=on-behalf&reg-type=individual")
    } else if (value == ("Corporate body")) {
        response.redirect(registration+"2-6-0?mode=on-behalf&reg-type=body-corp")
    } else if (value == ("Unincorporated association")) {
        response.redirect(registration+"2-7-0?mode=on-behalf&reg-type=unincorp")
    }
})

// Do you have any former names?
router.post('/route/2-G1-2', function(request, response) {

    var value = request.session.data['v2-G1-2']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G1-3")
    } else { 
        response.redirect(registration+"2-G1-4")
    }
})

// Do you have a different correspondence address?
router.post('/route/2-G1-7', function(request, response) {

    var value = request.session.data['v2-G1-7']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G1-8")
    } else { 
        response.redirect(registration+"2-G1-9")
    }
})

// EXIT POINTS 

// GROUP 1 - PERSONAL INFORMATION
router.post('/route/2-G1-return-self-individual', function(request, response) {
    response.redirect(registration+"2-G2-1")
})
router.post('/route/2-G1-return-self-body-corp', function(request, response) {
    response.redirect(registration+"2-G2-1")
})
router.post('/route/2-G1-return-self-unincorp', function(request, response) {
    response.redirect(registration+"2-G2-1")
})
router.post('/route/2-G1-return-on-behalf-individual', function(request, response) {
    response.redirect(registration+"2-G2-1")
})
router.post('/route/2-G1-return-on-behalf-body-corp', function(request, response) {
    response.redirect(registration+"2-G2-1")
})
router.post('/route/2-G1-return-on-behalf-unincorp', function(request, response) {
    response.redirect(registration+"2-G2-1")
})


// GROUP 2 - IDV
router.post('/route/2-G2-return-self-individual', function(request, response) {
    response.redirect(registration+"2-1-2")
})

router.post('/route/2-G2-return-self-body-corp', function(request, response) {
    response.redirect(registration+"2-2-7")
})
router.post('/route/2-G2-return-self-body-corp-officer', function(request, response) {
    response.redirect(registration+"2-2-off-3")
})

router.post('/route/2-G2-return-self-unincorp', function(request, response) {
    response.redirect(registration+"2-3-7")
})
router.post('/route/2-G2-return-self-unincorp-officer', function(request, response) {
    response.redirect(registration+"2-3-off-3")
})

// On Behalf of 
router.post('/route/2-G2-return-on-behalf-individual', function(request, response) {
    response.redirect(registration+"2-5-off-3")
})
router.post('/route/2-G2-return-on-behalf-body-corp-officer', function(request, response) {
    response.redirect(registration+"2-6-off-3")
})
router.post('/route/2-G2-return-on-behalf-unincorp-officer', function(request, response) {
    response.redirect(registration+"2-7-off-3")
})

// GROUP 3
router.post('/route/2-G3-2', function(request, response) {
    var value = request.session.data['v2-G3-2']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-3")
    } else { 
        response.redirect(registration+"2-G3-4")
    }
})
router.post('/route/2-G3-5', function(request, response) {
    var value = request.session.data['v2-G3-5']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-7")
    } else { 
        response.redirect(registration+"2-G3-6")
    }
})
router.post('/route/2-G3-8', function(request, response) {
    var value = request.session.data['v2-G3-8']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-9")
    } else { 
        response.redirect(registration+"2-G3-10")
    }
})
router.post('/route/2-G3-12', function(request, response) {
    var value = request.session.data['v2-G3-12']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-13")
    } else { 
        response.redirect(registration+"2-G3-15")
    }
})
router.post('/route/2-G3-15', function(request, response) {
    var value = request.session.data['v2-G3-15'];
    var mode = request.session.data['mode'];
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-16")
    } else { 
        if (mode == "self") {
            response.redirect(registration+"2-2-1")
        } else {
            response.redirect(registration+"2-6-1")
        }
    }
})



// Group 3 return paths
router.post('/route/2-G3-return-self-body-corp', function(request, response) {
    response.redirect(registration+"2-2-1")
})
router.post('/route/2-G3-return-on-behalf-body-corp', function(request, response) {
    response.redirect(registration+"2-6-1")
})

// Are you an officer of the body corporate?
router.post('/route/2-2-3', function(request, response) {
    var value = request.session.data['v2-2-3']
    if (value == "Yes"){ 
        response.redirect(registration+"2-2-5")
    } else { 
        response.redirect(registration+"2-2-4")
    }
})


// GROUP 4
router.post('/route/2-G4-5', function(request, response) {
    var value = request.session.data['v2-G4-5']
    if (value == "Yes"){ 
        response.redirect(registration+"2-G4-6")
    } else { 
        response.redirect(registration+"2-G4-7")
    }
})
router.post('/route/2-G4-9', function(request, response) {
    var value = request.session.data['v2-G4-9']
    var mode = request.session.data['mode'];
    if (value == "Yes"){ 
        response.redirect(registration+"2-G4-10")
    } else { 
        if (mode == "self") {
            response.redirect(registration+"2-3-1")
        } else {
            response.redirect(registration+"2-7-1")
        }
    }
})

router.post('/route/2-G3-15', function(request, response) {
    var value = request.session.data['v2-G3-15'];
    var mode = request.session.data['mode'];
    if (value == "Yes"){ 
        response.redirect(registration+"2-G3-16")
    } else { 
        if (mode == "self") {
            response.redirect(registration+"2-2-1")
        } else {
            response.redirect(registration+"2-6-1")
        }
    }
})


// Group 4 return paths
router.post('/route/2-G4-return-self-unincorp', function(request, response) {
    response.redirect(registration+"2-3-1")
})
router.post('/route/2-G4-return-on-behalf-unincorp', function(request, response) {
    response.redirect(registration+"2-7-1")
})

// Are you an officer of the unincorporated association?
router.post('/route/2-3-3', function(request, response) {
    var value = request.session.data['v2-3-3']
    if (value == "Yes"){ 
        response.redirect(registration+"2-3-5")
    } else { 
        response.redirect(registration+"2-3-4")
    }
})





/// JOURNEY / arrangement

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
    if (value == "None"){ 
        response.redirect(arrangement+"3-3?tier=political")
    } else { 
        response.redirect(arrangement+"3-2-1?tier=enhanced")
    }
})

// Are you in an arrangement with a foreign power?
router.post('/route/3-4', function(request, response) {
    var value = request.session.data['v3-4'];
    var type = request.session.data['registrant-type'];
    if (value == "None"){ 
        if (type == "individual") {
            response.redirect(arrangement+"3-6")
        } else {
            response.redirect(arrangement+"3-5")            
        }
    } else { // exit
        response.redirect(arrangement+"3-4-2?tier=enhanced")
    }
})

// Are you a salaried employee of a foreign power controlled organisation listed below? 
router.post('/route/3-5', function(request, response) {
    var value = request.session.data['v3-5']
    if (value == "None"){ 
        response.redirect(arrangement+"3-6")
    } else { // exit
        response.redirect(arrangement+"3-5-2?tier=enhanced")
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

// Enhanced Tier: Is this activity intended to influence:
router.post('/route/4-0b', function(request, response) {

    var value = request.session.data['v4-0b']
    if (value == "Non-political"){ // state type of political activity
        response.redirect(activity+"4-5")
    } else { // 'other' type
        response.redirect(activity+"4-1")
    }
})


// What type of influencing activity do you want to register?
router.post('/route/4-1', function(request, response) {

    var value = request.session.data['v4-1']
    if (value.includes("Private communication")){
        response.redirect(activity+"4-2")
    } else if (value.includes("Public communication")) {
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

router.post('/route/4-exception', function(request, response) {
    var exception = request.session.data['exception-request'];
    if (exception == "Yes") {
        response.redirect(activity+"4-exception-a?refer=yes")
    } else  {
        response.redirect(activity)
    }
})

router.post('/route/4-exception-b', function(request, response) {
    var exception = request.session.data['exception-request'];
    if (exception == "Yes") {
        response.redirect(activity+"4-exception-b?refer=yes")
    } else  {
        response.redirect(activity)
    }
})


// EXCEPTIONS
router.post('/route/exception-check', function(request, response) {
    var val = request.session.data['exception-request'];
    if (val == "Yes") {
        response.redirect(exception+"registration-complete?hold-activity=yes")
    } else  {
        response.redirect(exception+"registration-complete?hold-activity=no")
    }
})



//// VERSION 2


//   __     __            _               ____  
//   \ \   / /__ _ __ ___(_) ___  _ __   |___ \ 
//    \ \ / / _ \ '__/ __| |/ _ \| '_ \    __) |
//     \ V /  __/ |  \__ \ | (_) | | | |  / __/ 
//      \_/ \___|_|  |___/_|\___/|_| |_| |_____|

//   https://www.asciiart.eu/text-to-ascii-art

/// JOURNEY 

var root_v2 = '/journey/v2/';
var eligibility_v2 = '/journey/v2/eligibility/';
var tier_v2 = '/journey/v2/tier/';
var account_v2 = '/journey/v2/account/';

var registration_v2 = '/journey/v2/registration/';
var arrangement_v2 = '/journey/v2/arrangement/';
var agreement_v2 = '/journey/v2/agreement/';
var activity_v2 = '/journey/v2/activity/';
var exception_v2 = '/journey/v2/exception/';

/// 0. ELIGBILITY

router.post('/route-v2/0-2', function(request, response) {
    var value = request.session.data['v0-2'];
    if (value == "None of these"){ 
        response.redirect(eligibility_v2+"0-5")
    } else { 
        response.redirect(eligibility_v2+"0-3")
    }
})
router.post('/route-v2/0-3', function(request, response) {
    var value = request.session.data['v0-3'];
    if (value == "Yes"){ 
        response.redirect(eligibility_v2+"0-4")
    } else { 
        response.redirect(eligibility_v2+"0-7")
    }
})
router.post('/route-v2/0-5', function(request, response) {
    var value = request.session.data['v0-5'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(eligibility_v2+"0-6")
    } else { 
        // response.redirect(eligibility_v2+"0-4")
        response.redirect(eligibility_v2+"0-7")
    }
})
router.post('/route-v2/0-7', function(request, response) {
    var value = request.session.data['v0-7'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(eligibility_v2+"0-8")
    } else { 
        response.redirect(eligibility_v2+"dont-register")
    }
})



/// 1. TIER

// Does this registration involve Foreign Power X / Y / Z?:
router.post('/route-v2/1-1', function(request, response) {
    var value = request.session.data['v1-1'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(account_v2+"2-1-et?tier=enhanced&foreign-power=Ministry of Defence of Kolechia")
    } else { 
        response.redirect(tier_v2+"1-2")
    }
})
router.post('/route-v2/1-2', function(request, response) {
    var value = request.session.data['v1-2'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(account_v2+"2-1-et?tier=enhanced&foreign-power=Parliament of Obristan")
    } else { 
        response.redirect(tier_v2+"1-3")
    }
})
router.post('/route-v2/1-3', function(request, response) {
    var value = request.session.data['v1-3'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(account_v2+"2-1-et?tier=enhanced&foreign-power=Socialist Party of Arstotzka")
    } else { 
        response.redirect(tier_v2+"1-4")
    }
})
router.post('/route-v2/1-4', function(request, response) {
    var value = request.session.data['v1-4'];
    if (value == "Yes"){ // Enhanced tier, go to account
        response.redirect(tier_v2+"1-5?tier=enhanced")
    } else { 
        response.redirect(tier_v2+"1-6?tier=political")
    }
})

router.post('/route-v2/1-5', function(request, response) {
    var etOrg = request.session.data['v1-5'];
    response.redirect(account_v2+"2-20?foreign-power="+etOrg)
})

router.post('/route-v2/1-7', function(request, response) {
    var value = request.session.data['v1-7'];
    var value_b = request.session.data['v1-6'];
    if (value == "governing political party of a national government"){ // Enhanced tier, go to account
        if (value_b == "Ireland"){ // 
            response.redirect(tier_v2+"1-9")
        } else {
            response.redirect(tier_v2+"1-8")            
        }
    } else { 
        response.redirect(tier_v2+"1-8")            
    }
})

router.post('/route-v2/tier-handoff', function(request, response) {
    var fp= request.session.data['v1-8']
    response.redirect(account_v2+"2-1?foreign-power="+fp)
})


/// ACCOUNT

router.post('/route-v2/2-1', function(request, response) {
    var value = request.session.data['v2-1']
    if (value == "No"){ // 
        response.redirect(account_v2+"2-2")
    } else {
        response.redirect(account_v2+"2-13")            
    }
})

router.post('/route-v2/2-2', function(request, response) {
    var value = request.session.data['v2-2']
    if (value == "No"){ // 
        response.redirect(account_v2+"2-3?reg-mode=behalf")
    } else {
        response.redirect(account_v2+"2-12?reg-mode=self")            
    }
})

router.post('/route-v2/2-3', function(request, response) {
    var value = request.session.data['v2-3']
    if (value == "An individual person") {
        response.redirect(account_v2+"2-4")
    } else if (value == "An organisation that I work for") {
        response.redirect(account_v2+"2-7")
    } else if (value == "An organisation that I don't work for") {
        response.redirect(account_v2+"2-9")
    } else  {
        response.redirect(account_v2+"2-4")
    }
})

router.post('/route-v2/2-13', function(request, response) {
    var value = request.session.data['v2-13']
    if (value == "myself"){ // 
        response.redirect(account_v2+"2-14")
    } else {
        response.redirect(account_v2+"2-16")            
    }
})

router.post('/route-v2/2-14', function(request, response) {
    var value = request.session.data['v2-14'] // self misreps??
    if (value == "Yes"){ // 
        response.redirect(account_v2+"2-15")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/2-18', function(request, response) {
    var value = request.session.data['v2-18'] // on behalf of misreps??
    if (value == "Yes"){ // 
        response.redirect(account_v2+"2-19")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})


// Confirm statements
router.post('/route-v2/confirm-2-6', function(request, response) {
    var value = request.session.data['v2-6']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=1")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-8', function(request, response) {
    var value = request.session.data['v2-8']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=2")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-11', function(request, response) {
    var value = request.session.data['v2-11']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=1")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-12', function(request, response) {
    var value = request.session.data['v2-12']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=3")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})

router.post('/route-v2/confirm-2-15', function(request, response) {
    var value = request.session.data['v2-15']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"account-type-4?account-type=4&misreps=true")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})

router.post('/route-v2/confirm-2-19', function(request, response) {
    var value = request.session.data['v2-19']
    var rel = request.session.data['v2-17']
    if (value == "Yes"){ // 
        if (rel == "Colleague"){ // colleague
            response.redirect(account_v2+"account-type-5?account-type=5&misreps=true")
        } else { // representative
            response.redirect(account_v2+"account-type-6?account-type=6&misreps=true")
        }
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})

// ET Orgs
router.post('/route-v2/2-20', function(request, response) {
    var value = request.session.data['v2-20'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v2+"2-32")
    } else {
        response.redirect(account_v2+"2-21")            
    }
})

router.post('/route-v2/2-21', function(request, response) {
    var value = request.session.data['v2-21'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v2+"2-31")
    } else {
        response.redirect(account_v2+"2-22")            
    }
})

router.post('/route-v2/2-22', function(request, response) {
    var value = request.session.data['v2-22'] // 
    if (value == "An individual person"){ // 
        response.redirect(account_v2+"2-23")
    } else if (value == "An organisation that I work for") {
        response.redirect(account_v2+"2-26")
    } else {
        response.redirect(account_v2+"2-28")            
    }
})
router.post('/route-v2/confirm-2-25', function(request, response) {
    var value = request.session.data['v2-25']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=3")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-27', function(request, response) {
    var value = request.session.data['v2-27']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=2")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-30', function(request, response) {
    var value = request.session.data['v2-30']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=3")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})
router.post('/route-v2/confirm-2-31', function(request, response) {
    var value = request.session.data['v2-31']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-1?account-type=1")
    } else {
        response.redirect(account_v2+"2-1?guidance=true")            
    }
})

router.post('/route-v2/2-32', function(request, response) {
    var value = request.session.data['v2-32'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v2+"account-type-7?account-type=7")
    } else {
        response.redirect(account_v2+"2-33")            
    }
})




// Group

router.post('/route-v2/group-1-1', function(request, response) {
    var value = request.session.data['group-1-1']
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-2")
    } else {
        response.redirect(account_v2+"group-1-4")            
    }
})

router.post('/route-v2/group-1-2', function(request, response) {
    var value = request.session.data['group-1-2'];
    var type = request.session.data['account-type'];
    if (value == "Yes"){ // 
        response.redirect(account_v2+"group-1-3")
    } else {
        response.redirect(account_v2+"account-type-"+type)            
    }
})

router.post('/route-v2/group-1-4', function(request, response) {
    var value = request.session.data['group-1-4']
    if (value == "Verbal agreement"){ // 
        response.redirect(account_v2+"group-1-5")
    } else {
        response.redirect(account_v2+"group-1-6")
    }
})


// router.post('/route-v2/group-1--return-to-account-1', function(request, response) {
//     response.redirect(account_v2+"account-type-1")
// })
// router.post('/route-v2/group-1--return-to-account-2', function(request, response) {
//     response.redirect(account_v2+"account-type-2")
// })
// router.post('/route-v2/group-1--return-to-account-3', function(request, response) {
//     response.redirect(account_v2+"account-type-3")
// })
// router.post('/route-v2/group-1--return-to-account-4', function(request, response) {
//     response.redirect(account_v2+"account-type-4")
// })
// router.post('/route-v2/group-1--return-to-account-5', function(request, response) {
//     response.redirect(account_v2+"account-type-5")
// })


/// REGISTRATION

router.post('/route-v2/3-1-2', function(request, response) {
    var value = request.session.data['v3-1-2'] // 
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-1-3")
    } else {
        response.redirect(registration_v2+"3-1-4")            
    }
})

router.post('/route-v2/3-1-7', function(request, response) {
    var value = request.session.data['v3-1-7'] // 
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-1-8")
    } else {
        response.redirect(registration_v2+"3-1-9")            
    }
})

router.post('/route-v2/3-2-1', function(request, response) {
    var value = request.session.data['v3-2-1'] // 
    if (value == "Body corporate"){ // 
        response.redirect(registration_v2+"3-2a-1?reg-type=corp")
    } else {
        response.redirect(registration_v2+"3-2b-1?reg-type=assoc")            
    }
})

router.post('/route-v2/3-2a-1', function(request, response) {
    var value = request.session.data['v3-2a-1'] // 
    var dir = request.session.data['type'] // registrant or inputter
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-2-2")
    } else {
        if (dir == "registrant"){ // 
            response.redirect(registration_v2+"3-2-3")            
        } else {
            response.redirect(registration_v2+"3-2a-5")            
        }
    }
})
router.post('/route-v2/3-2b-1', function(request, response) {
    var value = request.session.data['v3-2b-1'] // 
    var dir = request.session.data['type'] // registrant or inputter
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-2-2")
    } else {
        if (dir == "registrant"){ // 
            response.redirect(registration_v2+"3-2-3")            
        } else {
            response.redirect(registration_v2+"3-2b-5")            
        }
    }
})
router.post('/route-v2/3-2a-5', function(request, response) {
    var value = request.session.data['v3-2a-5'] // 
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-2-6")
    } else {
        response.redirect(registration_v2+"3-2-8")            
    }
})

router.post('/route-v2/3-2-9', function(request, response) {
    var value = request.session.data['v3-2-9'] // 
    if (value == "Yes"){ // 
        response.redirect(registration_v2+"3-2-10")
    } else {
        response.redirect(registration_v2+"3-2-11")            
    }
})
router.post('/route-v2/3-2-13', function(request, response) {
    var value = request.session.data['v3-2-13'] //
    var dir = request.session.data['reg-type'] //
    if (value == "Yes") { // 
        response.redirect(registration_v2+"3-2-14")
    } else {
        if (dir == "corp"){ // 
            response.redirect(registration_v2+"3-2-16")            
        } else {
            response.redirect(registration_v2+"3-2-check")            
        }    
    }
})
router.post('/route-v2/3-2-16', function(request, response) {
    var value = request.session.data['v3-2-16'] //
    if (value == "Yes") { // 
        response.redirect(registration_v2+"3-2-17")
    } else {
        response.redirect(registration_v2+"3-2-check")            
    }
})





/// JOURNEY / ACTIVITY

// Person or entity 'doing'
router.post('/group-v2/4-G1', function(request, response) {
    response.redirect(activity_v2+"4-G1-1")
})

// Dates and frequency 
router.post('/group-v2/4-G2', function(request, response) {
    response.redirect(activity_v2+"4-G2-1")
})

// Is this activity intended to influence:
router.post('/route-v2/4-0', function(request, response) {

    var value = request.session.data['v4-0']
    if (value == "yes"){ // state type of political activity
        response.redirect(activity_v2+"4-0-1")
    } else { // 'other' type
        response.redirect(activity_v2+"4-5")
    }
})

// Enhanced Tier: Is this activity intended to influence:
router.post('/route-v2/4-0b', function(request, response) {
    var value = request.session.data['v4-0b']
    if (value == "Non-political"){ // state type of political activity
        response.redirect(activity_v2+"4-5?activityType=other")
    } else { // 'other' type
        response.redirect(activity_v2+"4-1")
    }
})


// What type of influencing activity do you want to register?
router.post('/route-v2/4-1', function(request, response) {

    var value = request.session.data['v4-1']
    if (value.includes("Private communication")){
        response.redirect(activity_v2+"4-2?activityType=private")
    } else if (value.includes("Public communication")) {
        response.redirect(activity_v2+"4-3?activityType=public")
    } else {
        response.redirect(activity_v2+"4-4?activityType=money")
    }
})

/// JOURNEY / ACTIVITY / GROUPS


// Will you be personally involved in the activity?
router.post('/route-v2/4-G1-1--t2', function(request, response) {

    var value = request.session.data['v4-G1-1--t2']
    if (value == "yes"){
        response.redirect(activity_v2+"4-G1-2")
    } else {
        response.redirect(activity_v2+"4-G1-3")
    }
})
router.post('/route-v2/4-G1-1--t3', function(request, response) {

    var value = request.session.data['v4-G1-1--t3']
    if (value == "yes"){
        response.redirect(activity_v2+"4-G1-2")
    } else {
        response.redirect(activity_v2+"4-G1-3")
    }
})
router.post('/route-v2/4-G1-1--t4', function(request, response) {

    var value = request.session.data['v4-G1-1--t4']
    if (value == "yes"){
        response.redirect(activity_v2+"4-G1-2")
    } else {
        response.redirect(activity_v2+"4-G1-3")
    }
})
router.post('/route-v2/4-G1-1--t5', function(request, response) {

    var value = request.session.data['v4-G1-1--t5']
    if (value == "yes"){
        response.redirect(activity_v2+"4-G1-2")
    } else {
        response.redirect(activity_v2+"4-G1-3")
    }
})

// Will anyone else be involved in this activity?
router.post('/route-v2/4-G1-2--t2', function(request, response) {
    var value = request.session.data['v4-G1-2--t2'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity_v2+"4-G1-3")
    } else {
        response.redirect(activity_v2+"4-2-1")
    }
})
// Will anyone else be involved in this activity?
router.post('/route-v2/4-G1-2--t3', function(request, response) {
    var value = request.session.data['v4-G1-2--t3'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity_v2+"4-G1-3")
    } else {
        // Drop out of Group 1
        response.redirect(activity_v2+"4-3-1")
    }
})
// Will anyone else be involved in this activity?
router.post('/route-v2/4-G1-2--t4', function(request, response) {
    var value = request.session.data['v4-G1-2--t4'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity_v2+"4-G1-3")
    } else {
        // Drop out of Group 1
        response.redirect(activity_v2+"4-4-2")
    }
})
// Will anyone else be involved in this activity?
router.post('/route-v2/4-G1-2--t5', function(request, response) {
    var value = request.session.data['v4-G1-2--t5'];
    if (value == "yes"){
        // > Please provide details of everyone involved in this activity
        response.redirect(activity_v2+"4-G1-3")
    } else {
        response.redirect(activity_v2+"4-G2-1")
    }
})
// router.post('/route-v2/4-G1-return', function(request, response) {
//     var stream = request.session.data['stream'];
//     if (stream == 2) {
//         response.redirect(version+"4-2-1")
//     } else if (stream == 3) {
//         response.redirect(version+"4-3-1")
//     } else  {
//         response.redirect(version+"4-4-2")
//     }
// })


router.post('/route-v2/4-G1-return-2', function(request, response) {
    response.redirect(activity_v2+"4-2-1")
})
router.post('/route-v2/4-G1-return-3', function(request, response) {
    response.redirect(activity_v2+"4-3-1")
})
router.post('/route-v2/4-G1-return-4', function(request, response) {
    response.redirect(activity_v2+"4-4-2")
})
router.post('/route-v2/4-G1-return-5', function(request, response) {
    response.redirect(activity_v2+"4-G2-1")
})

router.post('/route-v2/4-G2-return', function(request, response) {
    var stream = request.session.data['stream'];
    if (stream == 2) {
        response.redirect(activity_v2+"4-2-2")
    } else if (stream == 3) {
        response.redirect(activity_v2+"4-3-3")
    } else if (stream == 4) {
        response.redirect(activity_v2+"4-4-3")
    } else  {
        response.redirect(activity_v2+"4-5-1")
    }
})

router.post('/route-v2/4-exception', function(request, response) {
    var exception = request.session.data['exception-request'];
    if (exception == "Yes") {
        response.redirect(activity_v2+"4-exception-a?refer=yes")
    } else  {
        response.redirect(activity_v2)
    }
})

router.post('/route-v2/4-exception-b', function(request, response) {
    var exception = request.session.data['exception-request'];
    if (exception == "Yes") {
        response.redirect(activity_v2+"4-exception-b?refer=yes")
    } else  {
        response.redirect(activity_v2)
    }
})


// EXCEPTIONS
router.post('/route-v2/exception-check', function(request, response) {
    var val = request.session.data['exception-request'];
    if (val == "Yes") {
        response.redirect(exception_v2+"registration-complete?hold-activity=yes")
    } else  {
        response.redirect(exception_v2+"registration-complete?hold-activity=no")
    }
})





//// VERSION 3


// __     __            _               _____ 
// \ \   / /__ _ __ ___(_) ___  _ __   |___ / 
//  \ \ / / _ \ '__/ __| |/ _ \| '_ \    |_ \ 
//   \ V /  __/ |  \__ \ | (_) | | | |  ___) |
//    \_/ \___|_|  |___/_|\___/|_| |_| |____/ 

//   https://www.asciiart.eu/text-to-ascii-art

/// JOURNEY 

var root_v3 = '/journey/v3/';
var eligibility_v3 = '/journey/v3/eligibility/';
var login_v3 = '/journey/v3/login/';
var onboard_v3 = '/journey/v3/onboard/';
var tier_v3 = '/journey/v3/tier/';
var account_v3 = '/journey/v3/account';

var registration_v3 = '/journey/v3/registrations';
var arrangement_v3 = '/journey/v3/arrangement';
var agreement_v3 = '/journey/v3/agreement';
var activities_v3 = '/journey/v3/activities';
var exception_v3 = '/journey/v3/exception';
var cmt_v3 = '/journey/v3/cmt';

/// 0. ELIGBILITY

router.post('/route-v3/0-2', function(request, response) {
    var value = request.session.data['v0-2'];
    if (value == "None of these"){ 
        response.redirect(eligibility_v3+"0-5")
    } else { 
        response.redirect(eligibility_v3+"0-3")
    }
})
router.post('/route-v3/0-3', function(request, response) {
    var value = request.session.data['v0-3'];
    if (value == "None of these"){ 
        response.redirect(eligibility_v3+"0-7")
    } else { 
        response.redirect(eligibility_v3+"register")
    }
})
router.post('/route-v3/0-5', function(request, response) {
    var value = request.session.data['v0-5'];
    if (value == "None of these"){ 
        response.redirect(eligibility_v3+"0-7")
    } else { 
        response.redirect(eligibility_v3+"register")
    }
})
router.post('/route-v3/0-7', function(request, response) {
    var value = request.session.data['v0-7'];
    if (value == "None of these"){ 
        response.redirect(eligibility_v3+"dont-register")
    } else { 
        response.redirect(eligibility_v3+"register")
    }
})


router.post('/route-v3/l-4', function(request, response) {
    var value = request.session.data['v-l-4'];
    if (value == "Text message"){ 
        response.redirect(login_v3+"l-5")
    } else { 
        response.redirect(login_v3+"l-7")
    }
})

router.post('/route-v3/l-end', function(request, response) {
    var value = request.session.data['acc-type'];
    if (value == "registrant"){ 
        response.redirect(onboard_v3+"on-1")
    } else { 
        response.redirect(onboard_v3+"on-2")
    }
})


// ONBOARDING SCREENS
router.post('/route-v3/on-1', function(request, response) {
    var value = request.session.data['v-on-1'];
    if (value == "Individual"){ 
        response.redirect(onboard_v3+"on-check?acc-type=Individual&misrep=false&tier=default") // swapped from on-2 to on-check
    } else { 
        response.redirect(onboard_v3+"on-3")
    }
})

router.post('/route-v3/on-2', function(request, response) {
    var value = request.session.data['v-on-2'];
    if (value == "No"){ 
        response.redirect(onboard_v3+"on-check?acc-type=Individual&misrep=false&tier=default")
    } else { 
        response.redirect(onboard_v3+"on-check?acc-type=Individual&misrep=true&tier=enhanced")
    }
})

router.post('/route-v3/on-3', function(request, response) {
    var value = request.session.data['v-on-3'];
    if (value == "No"){ 
        response.redirect(onboard_v3+"on-check?acc-type=Entity&misrep=false&tier=default") // swapped path from on-5 to on-check
    } else { 
        response.redirect(onboard_v3+"on-check?acc-type=Entity&misrep=false&tier=enhanced")
    }
})

router.post('/route-v3/on-4', function(request, response) {
    var value = request.session.data['v-on-4'];
    // var accName = request.session.data['v-on-4'];
    response.redirect(account_v3+"?acc-type=Entity&misrep=false&tier=enhanced&accName="+value)
})

router.post('/route-v3/on-5', function(request, response) {
    var value = request.session.data['v-on-5'];
    if (value == "No"){ 
        response.redirect(onboard_v3+"on-check?acc-type=Entity&misrep=false&tier=default")
    } else { 
        response.redirect(onboard_v3+"on-6")
    }
})

router.post('/route-v3/on-6', function(request, response) {
    var value = request.session.data['v-on-6'];
    if (value == "No"){ 
        response.redirect(onboard_v3+"on-0?acc-type=None&v-on-1=None")
    } else { 
        response.redirect(onboard_v3+"on-2?acc-type=Individual")
    }
})


/// REGISTRANT CONTACT DETAILS

router.post('/route-v3/3-1-2', function(request, response) {
    var value = request.session.data['v3-1-2'] // 
    var redirect = request.session.data['return'] // 
    
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-1-3")
    } else {
        if (redirect == 'update') {
            response.redirect(account_v3+"/contact-details?return=complete")            
        } else if (redirect == 'check') {
            response.redirect(account_v3+"/3-1-check?return=complete")            
        } else {
            response.redirect(account_v3+"/3-1-4")            
        }
    }
})

router.post('/route-v3/3-1-6-a', function(request, response) {
    var value = request.session.data['v3-1-6-a'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-1-6-c")
    } else {
        response.redirect(account_v3+"/3-1-6-b")            
    }
})

router.post('/route-v3/3-1-7', function(request, response) {
    var value = request.session.data['v3-1-7'] // 
    if (value == "different-uk"){ // 
        response.redirect(account_v3+"/3-1-8")
    } else if (value == "different-non-uk"){ // 
        response.redirect(account_v3+"/3-1-8")
    } else {
        response.redirect(account_v3+"/3-1-9")            
    }
})

router.post('/route-v3/3-2-1', function(request, response) {
    var value = request.session.data['v3-2-1'] // 
    if (value == "Body corporate"){ // 
        response.redirect(account_v3+"/3-2a-1?reg-type=corp")
    } else {
        response.redirect(account_v3+"/3-2b-1?reg-type=assoc")            
    }
})

router.post('/route-v3/3-2a-1', function(request, response) {
    var value = request.session.data['v3-2a-1'] // 
    var dir = request.session.data['type'] // registrant or inputter
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-2-2")
    } else {
        if (dir == "registrant"){ // 
            response.redirect(account_v3+"/3-2-3")            
        } else {
            response.redirect(account_v3+"/3-2a-5")            
        }
    }
})
router.post('/route-v3/3-2b-1', function(request, response) {
    var value = request.session.data['v3-2b-1'] // 
    var dir = request.session.data['type'] // registrant or inputter
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-2-2")
    } else {
        if (dir == "registrant"){ // 
            response.redirect(account_v3+"/3-2-3")            
        } else {
            response.redirect(account_v3+"/3-2b-5")            
        }
    }
})
router.post('/route-v3/3-2a-5', function(request, response) {
    var value = request.session.data['v3-2a-5'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-2-6")
    } else {
        response.redirect(account_v3+"/3-2-8")            
    }
})

router.post('/route-v3/3-2-9', function(request, response) {
    var value = request.session.data['v3-2-9'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/3-2-10")
    } else {
        response.redirect(account_v3+"/3-2-11")            
    }
})
router.post('/route-v3/3-2-13', function(request, response) {
    var value = request.session.data['v3-2-13'] //
    var dir = request.session.data['reg-type'] //
    if (value == "Yes") { // 
        response.redirect(account_v3+"/3-2-14")
    } else {
        if (dir == "corp"){ // 
            response.redirect(account_v3+"/3-2-16")            
        } else {
            response.redirect(account_v3+"/3-2-check")            
        }    
    }
})
router.post('/route-v3/3-2-16', function(request, response) {
    var value = request.session.data['v3-2-16'] //
    if (value == "Yes") { // 
        response.redirect(account_v3+"/3-2-17")
    } else {
        response.redirect(account_v3+"/3-2-check")            
    }
})

router.post('/route-v3/delegated-authority', function(request, response) {
    var value = request.session.data['delegated-authority'] //
    var redirect = request.session.data['return'] // 

    if (value == "None") { // 
        if (redirect == 'update') {
            response.redirect(account_v3+"?return=complete")
        } else {
            response.redirect(account_v3)
        }
    } else {
        response.redirect(account_v3+"/delegated-authority-name")            
    }
})

/// ORGANISATION DETAILS

router.post('/route-v3/e2', function(request, response) {
    var value = request.session.data['e2'] // 
    var org = request.session.data['e1'] // 
    if (value == "Yes"){ // 
        response.redirect(account_v3+"/e2a?orgName="+org)
    } else {
        response.redirect(account_v3+"/e3?orgName="+org)          
    }
})

router.post('/route-v3/e3', function(request, response) {
    var value = request.session.data['e3']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e4-1')
    } else {
        response.redirect(account_v3+'/e5-1')
    }
})

router.post('/route-v3/e4-3', function(request, response) {
    var value = request.session.data['e4-3']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e4-6')
    } else {
        response.redirect(account_v3+'/e4-4')
    }
})

router.post('/route-v3/e4-4', function(request, response) {
    var value = request.session.data['e4-4']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e4-5')
    } else {
        response.redirect(account_v3+'/e4-7')
    }
})


router.post('/route-v3/e5-3', function(request, response) {
    var value = request.session.data['e5-3']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e5-5')
    } else {
        response.redirect(account_v3+'/e5-4')
    }
})

router.post('/route-v3/e6-1', function(request, response) {
    var value = request.session.data['e6-1']
    if (value == 'regAddress'){ 
        response.redirect(account_v3+'/e6-3')
    } else {
        response.redirect(account_v3+'/e6-2')
    }
})

router.post('/route-v3/e7-1', function(request, response) {
    var value = request.session.data['e7-1']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e7-3')
    } else {
        response.redirect(account_v3+'/e7-2')
    }
})

router.post('/route-v3/e7-2', function(request, response) {
    var value = request.session.data['e7-2']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e7-3')
    } else {
        response.redirect(account_v3+'/e8-1')
    }
})

router.post('/route-v3/e8-1', function(request, response) {
    var value = request.session.data['e8-1']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e8-4')
    } else {
        response.redirect(account_v3+'/e8-2')
    }
})
router.post('/route-v3/e8-2', function(request, response) {
    var value = request.session.data['e8-2']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/e8-3')
    } else {
        response.redirect(account_v3+'/e-check')
    }
})


/// REGISTRATIONS

router.post('/route-v3/r2', function(request, response) {
    var value = request.session.data['r2'] //
    if (value == "Foreign power") { // 
        response.redirect(registration_v3+"/r3")
    } else {
        response.redirect(registration_v3+"/r3a")            
    }
})

router.post('/route-v3/r3', function(request, response) {
    var value = request.session.data['r3'] //
    if (value == "No") { // 
        response.redirect(registration_v3+"/r5")
    } else {
        response.redirect(registration_v3+"/r4")            
    }
})

router.post('/route-v3/r6', function(request, response) {
    var value = request.session.data['r6'] //
    if (value == "Signed contract") { // 
        response.redirect(registration_v3+"/r7")
    } else {
        response.redirect(registration_v3+"/r8")            
    }
})

// MISREPS

router.post('/route-v3/m1', function(request, response) {
    var value = request.session.data['m1'] //
    if (value == "Yes") { // 
        response.redirect(registration_v3+"/m1a")
    } else {
        response.redirect(registration_v3+"/m1b")            
    }
})


router.post('/route-v3/m3', function(request, response) {
    var value = request.session.data['m3'] //
    if (value.includes("I am not sharing all important details")){
        response.redirect(registration_v3+"/m4")
    } else if (value.includes("I am giving information that is not true")){
        response.redirect(registration_v3+"/m5")            
    } else if (value.includes("I am hiding my true identity or the real reasons for my activities")){
        response.redirect(registration_v3+"/m6")            
    } else if (value.includes("I am giving a false impression about my activities")){
        response.redirect(registration_v3+"/m7")            
    } else if (value.includes("I am being untruthful or misleading in other ways")){
        response.redirect(registration_v3+"/m8")            
    } else if (value.includes("This question is not relevant to my work")){
        response.redirect(registration_v3+"/m-check")
    } else {
        response.redirect(registration_v3+"/m-check")
    }
})

router.post('/route-v3/m4', function(request, response) {
    var value = request.session.data['m3'] //
    if  (value.includes("I am giving information that is not true")){
        response.redirect(registration_v3+"/m5")            
    } else if (value.includes("I am hiding my true identity or the real reasons for my activities")){
        response.redirect(registration_v3+"/m6")            
    } else if (value.includes("I am giving a false impression about my activities")){
        response.redirect(registration_v3+"/m7")            
    } else if (value.includes("I am being untruthful or misleading in other ways")){
        response.redirect(registration_v3+"/m8")            
    } else if (value.includes("This question is not relevant to my work")){
        response.redirect(registration_v3+"/m-check")
    } else {
        response.redirect(registration_v3+"/m-check")
    }
})

router.post('/route-v3/m5', function(request, response) {
    var value = request.session.data['m3'] //
    if (value.includes("I am hiding my true identity or the real reasons for my activities")){
        response.redirect(registration_v3+"/m6")            
    } else if (value.includes("I am giving a false impression about my activities")){
        response.redirect(registration_v3+"/m7")            
    } else if (value.includes("I am being untruthful or misleading in other ways")){
        response.redirect(registration_v3+"/m8")            
    } else if (value.includes("This question is not relevant to my work")){
        response.redirect(registration_v3+"/m-check")
    } else {
        response.redirect(registration_v3+"/m-check")
    }
})

router.post('/route-v3/m6', function(request, response) {
    var value = request.session.data['m3'] //
    if (value.includes("I am giving a false impression about my activities")){
        response.redirect(registration_v3+"/m7")            
    } else if (value.includes("I am being untruthful or misleading in other ways")){
        response.redirect(registration_v3+"/m8")            
    } else if (value.includes("This question is not relevant to my work")){
        response.redirect(registration_v3+"/m-check")
    } else {
        response.redirect(registration_v3+"/m-check")
    }
})

router.post('/route-v3/m7', function(request, response) {
    var value = request.session.data['m3'] //
    if (value.includes("I am being untruthful or misleading in other ways")){
        response.redirect(registration_v3+"/m8")            
    } else if (value.includes("This question is not relevant to my work")){
        response.redirect(registration_v3+"/m-check")
    } else {
        response.redirect(registration_v3+"/m-check")
    }
})


/// ACTIVITIES

// router.post('/route-v3/a2-e', function(request, response) {
//     var value = request.session.data['a2-e']
//     if (value == 'The activity has a non-political objective'){ 
//         response.redirect(activities_v3+'/a7-1?activity-type=other&act1=in-progress')
//     } else {
//         response.redirect(activities_v3+'/a3-e')
//     }
// })

router.post('/route-v3/a3-e', function(request, response) {
    var value = request.session.data['a3-e'] //
    if (value == "Private communication") { // 
        response.redirect(activities_v3+'/a4-1?activity-type=private&act1=in-progress')
    } else if (value == "Public communication") { // 
        response.redirect(activities_v3+'/a5-1?activity-type=public&act1=in-progress')
    } else if (value == "Offer of money, goods or services") { // 
        response.redirect(activities_v3+'/a6-1?activity-type=money&act1=in-progress')
    } else {
        response.redirect(activities_v3+'/a7-1?activity-type=other&act1=in-progress')
    }
})

// REF v1/activities/4-0b
// router.post('/route/4-0b', function(request, response) {

//     var value = request.session.data['v4-0b']
//     if (value == "Non-political"){ // state type of political activity
//         response.redirect(activity+"4-5")
//     } else { // 'other' type
//         response.redirect(activity+"4-1")
//     }
// })


router.post('/route-v3/a3-p', function(request, response) {
    var value = request.session.data['a3-p'] //
    if (value == "Private communication") { // 
        response.redirect(activities_v3+'/a4-1?activity-type=private&act1=in-progress')
    } else if (value == "Public communication") { // 
        response.redirect(activities_v3+'/a5-1?activity-type=public&act1=in-progress')
    } else if (value == "Offer of money, goods or services") { // 
        response.redirect(activities_v3+'/a6-1?activity-type=money&act1=in-progress')
    } else {
        response.redirect(activities_v3+'/a7-1?activity-type=other&act1=in-progress')
    }
})

router.post('/route-v3/a4-2', function(request, response) {
    var value = request.session.data['a4-3'] //
    if (value == "I am doing the private communication myself") { // 
        response.redirect(activities_v3+"/a4-5")
    } else { // 
        response.redirect(activities_v3+"/a4-4")
    }
})

router.post('/route-v3/a4-3', function(request, response) {
    var value = request.session.data['a4-3'] //
    if (value == "I am doing the private communication myself") { // 
        response.redirect(activities_v3+"/a4-5")
    } else { // 
        response.redirect(activities_v3+"/a4-4")
    }
})

router.post('/route-v3/a5-2', function(request, response) {
    var value = request.session.data['a5-3'] //
    if (value == "I am doing the public communication myself") { // 
        response.redirect(activities_v3+"/a5-5")
    } else { // 
        response.redirect(activities_v3+"/a5-4")
    }
})

router.post('/route-v3/a5-3', function(request, response) {
    var value = request.session.data['a5-3'] //
    if (value == "I am doing the public communication myself") { // 
        response.redirect(activities_v3+"/a5-5")
    } else { // 
        response.redirect(activities_v3+"/a5-4")
    }
})

router.post('/route-v3/a6-2', function(request, response) {
    var value = request.session.data['a6-3'] //
    if (value == "I am making the offer myself") { // 
        response.redirect(activities_v3+"/a6-5")
    } else { // 
        response.redirect(activities_v3+"/a6-4n")
    }
})

router.post('/route-v3/a6-3', function(request, response) {
    var value = request.session.data['a6-3'] //
    if (value == "I am making the offer myself") { // 
        response.redirect(activities_v3+"/a6-5")
    } else { // 
        response.redirect(activities_v3+"/a6-4")
    }
})

router.post('/route-v3/a7-2', function(request, response) {
    var value = request.session.data['a7-2'] //
    if (value == "I am doing the activity myself") { // 
        response.redirect(activities_v3+"/a7-5")
    } else { // 
        response.redirect(activities_v3+"/a7-3")
    }
})


// EXCEPTIONS
router.post('/route-v3/exception-check', function(request, response) {
    var val = request.session.data['exception-request'];
    if (val == "Yes") {
        response.redirect(exception_v3+"/registration-complete?hold-activity=yes&act1=submitted")
    } else  {
        response.redirect(exception_v3+"/registration-complete?hold-activity=no&act1=submitted")
    }
})

// REPS

router.post('/route-v3/link-registrant', function(request, response) {
    var value = request.session.data['link-reg-firs-code']
    if (value == '1234567890123456'){ 
        response.redirect(account_v3+'/link-registrant-1?return=success')
    } else if (value == '1234-5678-9012-3456'){ 
        response.redirect(account_v3+'/link-registrant-1?return=success')
    } else {
        response.redirect(account_v3+'/link-registrant-fail?return=fail')
    }
})

router.post('/route-v3/link-registrant-1', function(request, response) {
    var value = request.session.data['link-registrant-1']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/link-registrant-2?setup=complete')
    } else {
        response.redirect(account_v3+'/link-registrant-3')
    }
})

// CMT

router.post('/route-v3/cmt-1', function(request, response) {
    var value = request.session.data['v-on-1'];
    if (value == "Individual"){ 
        response.redirect(cmt_v3+"/cmt-1")
    } else { 
        response.redirect(cmt_v3+"/cmt-2")
    }
})

router.post('/route-v3/on-2', function(request, response) {
    var value = request.session.data['on-2']
    if (value == 'Yes'){ 
        response.redirect(account_v3+'/on-3')
    } else {
        response.redirect(account_v3+'/on-4')
    }
})



// DEMO
var demo_v3 = '/journey/v3/demo';

router.post('/route-v3/i2', function(request, response) {
    var value = request.session.data['i2']
    if (value == 'Yes'){ 
        response.redirect(demo_v3+'/i3')
    } else {
        response.redirect(demo_v3+'/i4')
    }
})



/// V4

// __     __            _               _  _   
// \ \   / /__ _ __ ___(_) ___  _ __   | || |  
//  \ \ / / _ \ '__/ __| |/ _ \| '_ \  | || |_ 
//   \ V /  __/ |  \__ \ | (_) | | | | |__   _|
//    \_/ \___|_|  |___/_|\___/|_| |_|    |_|  

//   https://www.asciiart.eu/text-to-ascii-art

/// JOURNEY 

var root_v4 = '/journey/v4/';
var eligibility_v4 = '/journey/v4/eligibility/';
var setup_v4 = '/journey/v4/setup/';
var login_v4 = '/journey/v4/login/';
var onboard_v4 = '/journey/v4/onboard';
var tier_v4 = '/journey/v4/tier/';
var account_v4 = '/journey/v4/account';

var registration_v4 = '/journey/v4/registrations';
var registrant_v4 = '/journey/v4/registrant';
var verify_v4 = '/journey/v4/verify';
var arrangement_v4 = '/journey/v4/arrangement';
var agreement_v4 = '/journey/v4/agreement';
var activity_v4 = '/journey/v4/activity';
var exception_v4 = '/journey/v4/exception';
var cmt_v4 = '/journey/v4/cmt';
var guidance_v4 = '/journey/v4/guidance';





// ONBOARDING SCREENS

router.post('/route-v4/ol-4', function(request, response) {
    var value = request.session.data['ol-4'];
    if (value == "Text message"){ 
        response.redirect(setup_v4+"ol-5")
    } else { 
        response.redirect(setup_v4+"ol-7")
    }
})

router.post('/route-v4/ol-end', function(request, response) {
    var value = request.session.data['acc-type'];
    if (value == "registrant"){ 
        response.redirect(setup_v4+"on-1")
    } else { 
        response.redirect(setup_v4+"on-2")
    }
})




router.post('/route-v4/on-1', function(request, response) {
    var value = request.session.data['v-on-1'];
    if (value == "Individual"){ 
        response.redirect(registrant_v4+"/on-check?registrant-type=Individual&misrep=false&tier=default") // swapped from on-2 to on-check
    } else { 
        response.redirect(registrant_v4+"/on-3")
    }
})

router.post('/route-v4/on-2', function(request, response) {
    var value = request.session.data['v-on-2'];
    if (value == "No"){ 
        response.redirect(registrant_v4+"/on-check?registrant-type=Individual&misrep=false&tier=default")
    } else { 
        response.redirect(registrant_v4+"/on-check?registrant-type=Individual&misrep=true&tier=enhanced")
    }
})

router.post('/route-v4/on-3', function(request, response) {
    var value = request.session.data['v-on-3'];
    if (value == "No"){ 
        response.redirect(registrant_v4+"/on-check?registrant-type=Entity&misrep=false&tier=default") // swapped path from on-5 to on-check
    } else { 
        response.redirect(registrant_v4+"/on-check?registrant-type=Entity&misrep=false&tier=enhanced")
    }
})

router.post('/route-v4/on-4', function(request, response) {
    var value = request.session.data['v-on-4'];
    // var accName = request.session.data['v-on-4'];
    response.redirect(account_v4+"/?acc-type=Entity&misrep=false&tier=enhanced&accName="+value)
})

router.post('/route-v4/on-5', function(request, response) {
    var value = request.session.data['v-on-5'];
    if (value == "No"){ 
        response.redirect(registrant_v4+"/on-check?registrant-type=Entity&misrep=false&tier=default")
    } else { 
        response.redirect(registrant_v4+"/on-6")
    }
})

router.post('/route-v4/on-6', function(request, response) {
    var value = request.session.data['v-on-6'];
    if (value == "No"){ 
        response.redirect(registrant_v4+"/on-0?registrant-type=None&v-on-1=None")
    } else { 
        response.redirect(registrant_v4+"/on-2?registrant-type=Individual")
    }
})


/// REGISTRANT

router.post('/route-v4/reg-type', function(request, response) {
    var value = request.session.data['reg-type']
    if (value == 'Individual'){ 
        response.redirect(registrant_v4+'/i1?tier=political&misrep=false&reg-type=Individual')
    } else if (value == "Misrepresentative foreign power employee") { // 
        response.redirect(registrant_v4+'/i1?tier=enhanced&misrep=true&reg-type=Individual')
    } else if (value == "Entity") { // 
        response.redirect(registrant_v4+'/e1a?tier=political&misrep=false&reg-type=Entity')
    } else {
        response.redirect(registrant_v4+'/e1b?tier=enhanced&misrep=false&reg-type=Entity')
    }
})

/// REGISTRANT / Individual

router.post('/route-v4/i3', function(request, response) {
    var value = request.session.data['i3']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/i4')
    } else {
        response.redirect(registrant_v4+'/i5')
    }
})

router.post('/route-v4/i7', function(request, response) {
    var value = request.session.data['i7']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/i10')
    } else {
        response.redirect(registrant_v4+'/i8')
    }
})

router.post('/route-v4/i11', function(request, response) {
    var value = request.session.data['i11']
    if (value == 'A different address in the UK'){ 
        response.redirect(registrant_v4+'/i12')
    } else if (value == "A different address outside the UK") { // 
        response.redirect(registrant_v4+'/i12')
    } else {
        response.redirect(registrant_v4+'/i-check')
    }
})

/// REGISTRANT / Entity

router.post('/route-v4/e3', function(request, response) {
    var value = request.session.data['e3']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/e4')
    } else {
        response.redirect(registrant_v4+'/e5')
    }
})

router.post('/route-v4/e5', function(request, response) {
    var value = request.session.data['e5']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/e6')
    } else {
        response.redirect(registrant_v4+'/e7')
    }
})

router.post('/route-v4/e7', function(request, response) {
    var value = request.session.data['e7']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/e8')
    } else {
        response.redirect(registrant_v4+'/e11')
    }
})

router.post('/route-v4/e13', function(request, response) {
    var value = request.session.data['e13']
    if (value == 'Yes'){ 
        response.redirect(registrant_v4+'/e14')
    } else {
        response.redirect(registrant_v4+'/e15')
    }
})

router.post('/route-v4/e16', function(request, response) {
    var value = request.session.data['e16']
    if (value == 'A different address in the UK'){ 
        response.redirect(registrant_v4+'/e17')
    } else if (value == "A different address outside the UK") { // 
        response.redirect(registrant_v4+'/e17')
    } else {
        response.redirect(registrant_v4+'/e-check')
    }
})


/// REGISTRANT / Verify

router.post('/route-v4/idv-2', function(request, response) {
    var value = request.session.data['idv-2']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-3')
    } else {
        response.redirect(verify_v4+'/idv-sro-1')
    }
})

router.post('/route-v4/idv-ol', function(request, response) {
    var value = request.session.data['idv-ol']
    if (value == 'Pass'){ 
        response.redirect(verify_v4+'/idv-m-1?idv-check=pass')
    } else if (value == 'Fail'){ 
        response.redirect(verify_v4+'/idv-m-1?idv-check=fail')
    } else {
        response.redirect(verify_v4+'/idv-m-1?idv-check=other')
    }
})

router.post('/route-v4/idv-m-2', function(request, response) {
    var value = request.session.data['idv-m-2']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-2-a')
    } else {
        // response.redirect(verify_v4+'/idv-m-3')
        response.redirect(verify_v4+'/idv-m-end-1')
    }
})

router.post('/route-v4/idv-m-3', function(request, response) {
    var value = request.session.data['idv-m-3']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-3-a')
    } else {
        response.redirect(verify_v4+'/idv-m-4')
    }
})

router.post('/route-v4/idv-m-4', function(request, response) {
    var value = request.session.data['idv-m-4']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-4-a')
    } else {
        response.redirect(verify_v4+'/idv-m-5')
    }
})


router.post('/route-v4/idv-m-5', function(request, response) {
    var value = request.session.data['idv-m-5']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-5-a')
    } else {
        response.redirect(verify_v4+'/idv-m-6')
    }
})


router.post('/route-v4/idv-m-6', function(request, response) {
    var value = request.session.data['idv-m-6']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-6-a')
    } else {
        response.redirect(verify_v4+'/idv-m-7')
    }
})

router.post('/route-v4/idv-m-7', function(request, response) {
    var value = request.session.data['idv-m-7']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-7-a')
    } else {
        response.redirect(verify_v4+'/idv-m-8')
    }
})

router.post('/route-v4/idv-m-8', function(request, response) {
    var value = request.session.data['idv-m-8']
    if (value == 'Yes'){ 
        response.redirect(verify_v4+'/idv-m-8-a')
    } else {
        response.redirect(verify_v4+'/idv-m-end-1')
    }
})





/// ARRANGEMENTS

router.post('/route-v4/fp-2', function(request, response) {
    var value = request.session.data['fp-2'] //
    if (value == "Yes") { // 
        response.redirect(arrangement_v4+"/fp-3")
    } else {
        response.redirect(arrangement_v4+"/fp-7")            
    }
})

router.post('/route-v4/fp-4', function(request, response) {
    var value = request.session.data['fp-4'] //
    if (value == "Yes") { // 
        response.redirect(arrangement_v4+"/fp-5")
    } else {
        response.redirect(arrangement_v4+"/fp-6")            
    }
})






// ACTIVITIES

router.post('/route-v4/a-2-e', function(request, response) {
    var value = request.session.data['a-2-e'] //
    if (value == "The activity does not intend to influence anything listed above") { // 
        response.redirect(activity_v4+'/a-4')
    } else {
        response.redirect(activity_v4+'/a-3-e')
    }
})

router.post('/route-v4/a3-e', function(request, response) {
    var value = request.session.data['a3-e'] //
    if (value == "Private communication") { // 
        response.redirect(activity_v4+'/a4-check?activity-type=private&activity-name=Private communication')
    } else if (value == "Public communication") { // 
        response.redirect(activity_v4+'/a5-check?activity-type=public&activity-name=Public communication')
    } else if (value == "Offer of money, goods or services") { // 
        response.redirect(activity_v4+'/a6-check?activity-type=money&activity-name=Offer of money, goods or services')
    } else {
        response.redirect(activity_v4+'/a7-check?activity-type=other&activity-name=Other')
    }
})

router.post('/route-v4/a-5', function(request, response) {
    var value = request.session.data['a-5']
    if (value == 'I am doing the activity myself'){ 
        response.redirect(activity_v4+'/a-6')
    } else {
        response.redirect(activity_v4+'/a-sub-0')
    }
})

router.post('/route-v4/a-sub-type', function(request, response) {
    var curInc = request.session.data['sub'];
    var value = request.session.data['a-sub-type']
    if (value == 'Entity'){ 
        response.redirect(activity_v4+'/a-sub-entity?a-sub-type-'+curInc+'='+value)
    } else {
        response.redirect(activity_v4+'/a-sub-individual?a-sub-type-'+curInc+'='+value)
    }
})
router.post('/route-v4/a-restart-sub', function(request, response) {
    var curInc = request.session.data['sub'];
    curInc++;
    response.redirect(activity_v4+'/a-sub-1?sub='+curInc)
})

router.post('/route-v4/activity-router-1', function(request, response) {
    var value = request.session.data['activity-types'] //
    if (value.includes("Private communication to a senior public official or politician in the UK")){
        response.redirect(activity_v4+'/a-pri-1')
    } else  if (value.includes("Public communication in the UK")){
        response.redirect(activity_v4+'/a-pub-1')
    } else  if (value.includes("Supply of money, goods or services to an individual or entity in the UK")){
        response.redirect(activity_v4+'/a-mon-1')
    } else  if (value.includes("Other type of activity in the UK")){
        response.redirect(activity_v4+'/a-oth-1')
    } else {
        response.redirect(activity_v4+'/a-check')
    }
})

router.post('/route-v4/activity-router-2', function(request, response) {
    var value = request.session.data['activity-types'] //
    if (value.includes("Public communication in the UK")){
        response.redirect(activity_v4+'/a-pub-1')
    } else  if (value.includes("Supply of money, goods or services to an individual or entity in the UK")){
        response.redirect(activity_v4+'/a-mon-1')
    } else  if (value.includes("Other type of activity in the UK")){
        response.redirect(activity_v4+'/a-oth-1')
    } else {
        response.redirect(activity_v4+'/a-check')
    }
})

router.post('/route-v4/activity-router-3', function(request, response) {
    var value = request.session.data['activity-types'] //
    if (value.includes("Supply of money, goods or services to an individual or entity in the UK")){
        response.redirect(activity_v4+'/a-mon-1')
    } else  if (value.includes("Other type of activity in the UK")){
        response.redirect(activity_v4+'/a-oth-1')
    } else {
        response.redirect(activity_v4+'/a-check')
    }
})

router.post('/route-v4/activity-router-4', function(request, response) {
    var value = request.session.data['activity-types'] //
    if (value.includes("Other type of activity in the UK")){
        response.redirect(activity_v4+'/a-oth-1')
    } else {
        response.redirect(activity_v4+'/a-check')
    }
})
// and final screen of Other always goes straight to a-check

router.post('/route-v4/a-pri-2', function(request, response) {
    var value = request.session.data['a-pri-2']
    if (value.includes("Specific individuals")){
        response.redirect(activity_v4+'/a-pri-3')
    } else if (value.includes("Groups or categories of people")){
        response.redirect(activity_v4+'/a-pri-4')
    } else {
        response.redirect(activity_v4+'/a-check')
    }
})

router.post('/route-v4/a-pri-3', function(request, response) {
    var value = request.session.data['a-pri-2']
    var type = request.session.data['activity-types'] //
    if (value.includes("Groups or categories of people")){
        response.redirect(activity_v4+'/a-pri-4')
    } else {
        // pulled from /route-v4/activity-router-2
        if (type.includes("Public communication in the UK")){
            response.redirect(activity_v4+'/a-pub-1')
        } else  if (value.includes("Supply of money, goods or services to an individual or entity in the UK")){
            response.redirect(activity_v4+'/a-mon-1')
        } else  if (value.includes("Other type of activity in the UK")){
            response.redirect(activity_v4+'/a-oth-1')
        } else {
            response.redirect(activity_v4+'/a-check')
        }

    }
})

// REGISTRATION

router.post('/route-v4/registration-complete', function(request, response) {
    var value = request.session.data['exception-request']
    if (value == 'Yes'){ 
        response.redirect(registration_v4+'/registration-complete?registration-progress=submitted&hold-registration=yes')
    } else  if (value == 'No'){ 
        response.redirect(registration_v4+'/registration-complete?registration-progress=complete&hold-registration=no')
    } else {
        response.redirect(registration_v4+'/registration-complete?registration-progress=complete&hold-registration=not-applicable')
    }
})

router.post('/route-v4/registration-overview', function(request, response) {
    var value = request.session.data['registration-overview']
    if (value == 'Yes'){ 
        response.redirect(registration_v4+'/')
    } else {
        response.redirect(registration_v4+'/')
    }
})

// EXCEPTIONS 
router.post('/route-v4/exception-check', function(request, response) {
    var val = request.session.data['exception-request'];
    if (val == "Yes") {
        response.redirect(exception_v4+'/registration-complete?hold-activity=yes&activity-progress=complete&exception-progress=in-progress&registration-progress=complete')
    } else  {
        response.redirect(exception_v4+'/registration-complete?hold-activity=no&activity-progress=complete&exception-progress=in-progress&registration-progress=complete')
    }
})


router.post('/route-v4/restart-inc', function(request, response) {
    var curInc = request.session.data['inc'];
    curInc++;
    response.redirect(activity_v4+'/a-inc-1?inc='+curInc)
})

/// GUIDANCE

router.post('/route-v4/guidance/registrant-types', function(request, response) {
    var val = request.session.data['reg-type'];
    if (val == "Yes") {
        response.redirect(guidance_v4+'/')
    } else {
        response.redirect(guidance_v4+'/')
    }
})