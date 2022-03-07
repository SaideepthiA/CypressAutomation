import common from "mocha/lib/interfaces/common";
import commonfunctions from "../../support/commonFunctions"
class API_Automation {


    accessToken = '85a59c82176a387c0f57a05e28930e29c45cd39a1e4221b01d2c288f6003bcea'
    data = {
        "name": "apiautomation",
        "gender": "female",
        "email": commonfunctions.emailIdGenerator(),
        "status": "active"
    }
    getUsers() {

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: "Bearer " + this.accessToken
            }
        }).then((res) => {
            cy.writeFile("cypress//fixtures//getresponse.json", res)
            expect(res.status).to.eq(200);
        })

    }
    verifyGetResponse() {
        cy.readFile("cypress//fixtures//getresponse.json").then((res) => {
            expect(res.status).to.eq(200)
        })
    }
    registerPostCall() {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: "Bearer " + this.accessToken
            },
            body: {
                "name": this.data.name,
                "gender": this.data.gender,
                "email": this.data.email,
                "status": this.data.status
            }

        }).then((res) => {
            cy.writeFile("cypress//fixtures//registerUserDetails.json", res.body)
            expect(res.status).to.eq(201)
            expect(res.body.name).to.eq(this.data.name)

        })
        this.data.email = commonfunctions.emailIdGenerator()

    }
    verifyUserRegistered() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((data) => {

            let id = data.id
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    authorization: "Bearer " + this.accessToken
                }
            }).then((res) => {
                expect(res.body.id).to.eq(id)
            })

        })
    }
    putcall() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((data) => {

            let id = data.id
            cy.log(id)
            cy.request({

                method: 'PUT',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    authorization: "Bearer " + this.accessToken
                },
                body: {
                    "name": "edited name",
                    "gender": "female",
                    "email": commonfunctions.emailIdGenerator(),
                    "status": "active"
                }

            }).then((res) => {
                cy.writeFile("cypress//fixtures//editUserDetails.json", res.body)
                expect(res.status).to.eq(200)
                expect(res.body.name).to.eq("edited name")
            })
        })
    }
    verifyDetailsEdited() {
        cy.readFile("cypress//fixtures//editUserDetails.json").then((data) => {

            let id = data.id
            let name = data.name
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    authorization: "Bearer " + this.accessToken
                }
            }).then((res) => {
                expect(res.body.name).to.eq("edited name")
            })
        })
    }
    deleteCall() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((data) => {

            let id = data.id
            cy.log(id)
            cy.request({

                method: 'DELETE',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    authorization: "Bearer " + this.accessToken
                },
                body: {
                    "name": "edited name",
                    "gender": "female",
                    "email": commonfunctions.emailIdGenerator(),
                    "status": "active"
                }

            }).then((res) => {
                expect(res.status).to.eq(204)
            })
        })
    }
    verifyDeletedUser() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((data) => {

            let id = data.id
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    authorization: "Bearer " + this.accessToken
                },
                failOnStatusCode: false
            }).then((res) => {
                cy.log(res)
                expect(res.status).to.eq(404)
                expect(res.body.message).to.eq("Resource not found")

            })
        })

    }
    noInputs() {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: "Bearer " + this.accessToken
            },
            failOnStatusCode: false

        }).then((res) => {
            cy.writeFile("cypress//fixtures//registerUserDetails.json", res.body)
            expect(res.status).to.eq(422)

        })
    }
    verifyNoInputError() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((body) => {

            body.forEach(i => {
                expect(i.message).to.be.eq("can't be blank")
            })

        })
    }
    alreadyRegisteredEmail() {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: "Bearer " + this.accessToken
            },
            body: {
                "name": this.data.name,
                "gender": this.data.gender,
                "email": "abcdef@gmail.com",
                "status": this.data.status
            },
            failOnStatusCode: false

        }).then((res) => {
            cy.writeFile("cypress//fixtures//registerUserDetails.json", res.body)
            expect(res.status).to.eq(422)
        })
        this.data.email = commonfunctions.emailIdGenerator()
    }
    verifyEmailError() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((body) => {
            expect(body[0].message).to.be.eq("has already been taken")
        })
    }

    missingParams() {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            headers: {
                authorization: "Bearer " + this.accessToken
            },
            body: {
                "name": this.data.name,
                "gender": this.data.gender,
                "status": this.data.status
            },
            failOnStatusCode: false

        }).then((res) => {
            cy.writeFile("cypress//fixtures//registerUserDetails.json", res.body)
            expect(res.status).to.eq(422)
        })
    }
    verifyMissingParamsError() {
        cy.readFile("cypress//fixtures//registerUserDetails.json").then((body) => {
            expect(body[0].field).to.eq("email")
            expect(body[0].message).to.eq("can't be blank")
        })
    }

    invalidInputs(){
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/12333333',
            headers: {
                authorization: "Bearer " + this.accessToken
            },
            failOnStatusCode: false
        }).then((res) => {
            cy.writeFile("cypress//fixtures//getresponse.json", res)
            expect(res.status).to.eq(404);
        })

    }
    verifyInvalidErrorMessage(){
        cy.readFile("cypress//fixtures//getresponse.json").then((res)=>{
            expect(res.body.message).to.eq("Resource not found")
        })    }

}
module.exports = new API_Automation;