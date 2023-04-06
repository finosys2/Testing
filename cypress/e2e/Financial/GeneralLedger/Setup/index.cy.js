import { Login } from "../../../Login.cy";
import * as Period from "../Setup/Period.cy";
//import * as TaxDetail from "../Setup/TaxDetail.cy";
//import * as TaxSchdule from "../Setup/TaxSchdule.cy";
import * as Bank from "../Setup/Bank.cy";
import * as Aging from "../Setup/Aging.cy";
import * as payment from "../Setup/payment.cy";
//import * as PaymentMode from "../Setup/PaymentModes.cy";
import * as Cards from "../Setup/Cards.cy";
import * as Jobs from "../Setup/Jobs.cy";
import * as Curency from "../Setup/Currency.cy";
import * as Budget from "../Setup/Budgets.cy";

describe('Financial', () => {
    describe('General Ledger', () => {
        describe('Setup', () => {
            it('Period', () => {
                Login();
                HandlePeriod();
                //HandleTaxDetail();
                // HandleTaxSchdule();
                // HandleBank();
                // HandleAging();
                // Handlepayment();
                //HandlePaymentMode();
                // HandleCards();
                // HandleJobs();
                // HandleCurency();
                // HandleBudget();
            });
        });
    });
});

function HandlePeriod() {
    Period.Save();
    Period.View();
    Period.Edit();
    Period.Clear();
    Period.Search();
    Period.Delete();
}
function HandleTaxDetail() {
    TaxDetail.Save();
    TaxDetail.View();
    TaxDetail.Edit();
    TaxDetail.Download();
    TaxDetail.Delete();
}
function HandleTaxSchdule() {
    TaxSchdule.Save();
    TaxSchdule.View();
    TaxSchdule.Edit();
    TaxSchdule.Download();
    TaxSchdule.Delete();
}
function HandleBank() {
    Bank.Save();
    Bank.View();
    Bank.Edit();
    Bank.Download();
    Bank.Delete();
}
function HandleAging() {
    Aging.Save();
    Aging.View();
    Aging.Edit();
    Aging.Download();
    Aging.Delete();
}
function Handlepayment() {
    payment.Save();
    payment.View();
    payment.Edit();
    payment.Download();
    payment.Delete();
}
function HandlePaymentMode() {
    PaymentMode.Save();
    PaymentMode.View();
    PaymentMode.Edit();
    PaymentMode.Download();
    PaymentMode.Delete();
}
function HandleCards() {
    Cards.Save();
    Cards.View();
    Cards.Edit();
    Cards.Download();
    Cards.Delete();
}
function HandleJobs() {
    Jobs.Save();
    Jobs.View();
    Jobs.Edit();
    Jobs.Download();
    Jobs.Delete();
}
function HandleCurency() {
    Curency.Save();
    Curency.View();
    Curency.Edit();
    Curency.Download();
    Curency.Delete();
}
function HandleBudget() {
    Budget.Save();
    Budget.View();
    Budget.Edit();
    Budget.Download();
    Budget.Delete();
}