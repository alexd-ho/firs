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

