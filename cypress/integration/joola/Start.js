
import HomePage from "../Page Objects/HomePage"
describe('First test',function()
{
    before(function(){
        cy.fixture('example').then(function(data){
        this.data=data

        })
    })
    it('login to CMS',function(){
        const homepage=new HomePage()
        cy.visit(Cypress.env('url'))
        homepage.getLoginpageTitle().should('have.text',this.data.title)
        homepage.getEmailfield().type(this.data.email)
        homepage.Passwordfield().type(this.data.password)
        homepage.SignInButton().click()

    })

})