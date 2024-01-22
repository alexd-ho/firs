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
        response.redirect("eligibility-direction")
    } else {
        response.redirect("/eligibility-no")
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