class HomePage
{
    getLoginpageTitle()
    {
        return cy.get("span.font-weight-bolder.login-text.font-size-h4.font-size-h1-lg")
    }
    getEmailfield()
    {
        return cy.get("input[name='email']")
    }
    Passwordfield()
    {
        return cy.get("input[name='password']")
    }
    SignInButton()
    {
        return cy.get("#kt_login_signin_submit")
    }
}
export default HomePage;