import { Login } from "../Login.cy";
//GL-S
import * as Period from "../Financial/GeneralLedger/Setup/Period.cy";
import * as TaxDetail from "../Financial/GeneralLedger/Setup/TaxDetail.cy";
import * as TaxSchdule from "../Financial/GeneralLedger/Setup/TaxSchdule.cy";
import * as Bank from "../Financial/GeneralLedger/Setup/Bank.cy";
import * as Aging from "../Financial/GeneralLedger/Setup/Aging.cy";
import * as payment from "../Financial/GeneralLedger/Setup/payment.cy";
import * as PaymentMode from "../Financial/GeneralLedger/Setup/paymentMode.cy";
import * as Cards from "../Financial/GeneralLedger/Setup/Cards.cy";
import * as Shipping from "../Financial/GeneralLedger/Setup/Shipping.cy";
import * as Territories from "../Financial/GeneralLedger/Setup/Territories.cy";
import * as Curency from "../Financial/GeneralLedger/Setup/Currency.cy";
import * as Extendedjobs from "../Financial/GeneralLedger/Setup/Extendedjobs.cy";
import * as SegmentValue from "../Financial/GeneralLedger/Setup/SegmentValue.cy";
//import * as Jobs from "../Financial/GeneralLedger/Setup/Jobs.cy";
// import * as Budget from "../Financial/GeneralLedger/Setup/Budgets.cy";
//GL-T
import * as BankTransfer from "../Financial/GeneralLedger/Transaction/BankTransfers.cy";
import * as JournalEntry from "../Financial/GeneralLedger/Transaction/JournalEntry.cy";
import * as JournalPayment from "../Financial/GeneralLedger/Transaction/JournalPayment.cy";
import * as JournalReceipt from "../Financial/GeneralLedger/Transaction/JournalReceipt.cy";
import * as PattyCash from "../Financial/GeneralLedger/Transaction/PattyCash.cy";
//PAY-S
import * as LCCategories from "./Payable/Setup/LCCategories.cy";
import * as LCCode from "./Payable/Setup/LCCode.cy";
import * as VendorCategories from "./Payable/Setup/VendorCategories.cy";
import * as VendorProfile from "./Payable/Setup/VendorProfile.cy";
import * as Vendors from "./Payable/Setup/Vendors.cy";
//PAY-T
import * as VendorDoc from "./Payable/Transaction/VendorDoc.cy";
import * as VendorInvoice from "./Payable/Transaction/VendorInvoice.cy";
import * as VendorPayments from "./Payable/Transaction/VendorPayments.cy";
//RECEIVABLE-S
import * as CustomerCategories from "./Receivable/Setup/CustomerCategories.cy";
import * as CustomerProfile from "./Receivable/Setup/CustomerProfiles.cy";
import * as Customers from "./Receivable/Setup/Customers.cy";
//RECEIVABLE-T
import * as CustomerDoc from "./Receivable/Transaction/CustomerDoc.cy";
import * as CustomerInvoice from "./Receivable/Transaction/CustomerInvoice.cy";
import * as CustomerReceipt from "./Receivable/Transaction/CustomerReceipt.cy";
//PROFIT-S
import * as Campaign from "./Profit/Setup/Campaign.cy";
import * as CareOf from "./Profit/Setup/CareOf.cy";
import * as DonorRegistration from "./Profit/Setup/DonorRegistration.cy";
//PROFIT-T
import * as DonorReceipt from "./Profit/Transaction/DonorReceipts.cy";

describe('Financial', () => {
    it('Testing All form', () => {
        Login();
        //GLS
        HandlePeriod();
        HandleTaxDetail();
        HandleTaxSchdule();
        HandleBank();
        HandleAging();
        Handlepayment();
        HandlePaymentMode();
        HandleCards();
        HandleCurency();
        HandleShipping();
        HandleTerritories()
         // HandleJobs();
        //HndleExtendedJob();
        //HandleSegment();
        // HandleBudget();   
        //GLT
        HandleBankTransfer();
        HandleEntry();
        HandleJournalPay();
        //PAYS
        HandleLCCategories();
        HandleLCCode();
        HandleVendorCategories();
        HandleVendorProfile();
        HandleVendors();
        //PAYT
        HandleVendorDoc();
        HandleVendorInvoice();
        HandleVendorPayments();
        //RECEIVABLES
        HandleCustomerCategories();
        HandleCustomerProfile();
        HandleCustomers();
        //RECEIVABLET
        HandleCustomerDoc();
        HandleCustomerInvoice();
        HandleCustomerReceipt();
        //PROFITS
        HandleCampaign();
        HandleCareOf();
        HandleDonorRegistration();
        //PROFITT
        HandleDonorReceipt();
    });
});
//GL-S
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
function HandleShipping() {
    Shipping.Save();
    Shipping.View();
    Shipping.Edit();
    Shipping.Download();
    Shipping.Delete();
}
function HandleTerritories() {
    Territories.Save();
    Territories.View();
    Territories.Edit();
    Territories.Download();
    Territories.Delete();
}
//GL-T
function HandleBankTransfer() {
    BankTransfer.Save();
    BankTransfer.View();
    BankTransfer.Edit();
    BankTransfer.Download();
    BankTransfer.print();
    BankTransfer.Post();
    BankTransfer.Delete();
}
function HandleEntry() {
    JournalEntry.Save();
    JournalEntry.View();
    JournalEntry.Edit();
    JournalEntry.Download();
    JournalEntry.print();
    JournalEntry.Post();
    JournalEntry.Delete();
}
function HandleJournalPay() {
    JournalPayment.Save();
    JournalPayment.View();
    JournalPayment.Edit();
    JournalPayment.Download();
    JournalPayment.print();
    JournalPayment.Post();
    JournalPayment.Delete();
}
function HandleReceipt() {

}
function PattyCash() {

}
//PAY-S
function HandleLCCategories() {
    LCCategories.Save();
    LCCategories.View();
    LCCategories.Edit();
    LCCategories.Download();
    LCCategories.Delete();
}
function HandleLCCode() {
    LCCode.Save();
    LCCode.View();
    LCCode.Edit();
    LCCode.Download();
    LCCode.Search();
    LCCode.Delete();
}
function HandleVendorCategories() {
    VendorCategories.Save();
    VendorCategories.View();
    VendorCategories.Edit();
    VendorCategories.Download();
    VendorCategories.Search();
    VendorCategories.Delete();
}
function HandleVendorProfile(){
    VendorProfile.Save();
    VendorProfile.View();
    VendorProfile.Edit();
    VendorProfile.Download();
    VendorProfile.Search();
    VendorProfile.Delete();
}
function HandleVendors(){
    Vendors.Save(); 
    Vendors.View();  
    Vendors.Edit();   
    Vendors.Download(); 
    Vendors.Search();  
    Vendors.Delete(); 
}
//PAY-T
function HandleVendorDoc(){
    VendorDoc.Save();
}
function HandleVendorInvoice(){
    VendorInvoice.Save();
    VendorInvoice.View();
    VendorInvoice.Edit();
    VendorInvoice.Download();
    VendorInvoice.Post();
    VendorInvoice.print();
    VendorInvoice.Delete();
}
function HandleVendorPayments(){
    VendorPayments.Save();
    VendorPayments.View();
    VendorPayments.Edit();
    VendorPayments.Download();
    VendorPayments.print();
    VendorPayments.Post();
    VendorPayments.Delete();
}
//RECEIVABLE-S
function HandleCustomerCategories(){
    CustomerCategories.Save();
    CustomerCategories.View();
    CustomerCategories.Edit();
    CustomerCategories.Download();
    CustomerCategories.Search();
    CustomerCategories.Delete(); 
}
function HandleCustomerProfile(){
    CustomerProfile.Save();
    CustomerProfile.View();
    CustomerProfile.Edit();
    CustomerProfile.Clear();
    CustomerProfile.Download();
    CustomerProfile.Search();
    CustomerProfile.Delete(); 
}
function HandleCustomers(){
    Customers.Save();
    Customers.View();
    Customers.Edit();
    Customers.Download();
    Customers.Search();
    Customers.Delete();
}
//RECEIVABLE-T
function HandleCustomerDoc(){
    CustomerDoc.Save();
}
function HandleCustomerInvoice(){
    CustomerInvoice.Save();
    CustomerInvoice.View();
    CustomerInvoice.Edit();
    CustomerInvoice.Download();
    CustomerInvoice.Post();
    CustomerInvoice.Delete();
}
function HandleCustomerReceipt(){
    CustomerReceipt.Save();
    CustomerReceipt.View();
    CustomerReceipt.Edit();
    CustomerReceipt.Print();
    CustomerReceipt.Download();
    CustomerReceipt.Post();
    CustomerReceipt.Delete();
}
//PROFIT-S
function HandleCampaign(){
    Campaign.Save();
    Campaign.View();
    Campaign.Edit();
    Campaign.Download();
    Campaign.Search();
    Campaign.Delete();
}
function HandleCareOf(){
    CareOf.Save();
    CareOf.View();
    CareOf.Edit();
    CareOf.Download();
    CareOf.Search();
    CareOf.Delete();
}
function HandleDonorRegistration(){
    DonorRegistration.Save();
    DonorRegistration.View();
    DonorRegistration.Edit();
    DonorRegistration.Download();
    DonorRegistration.Search();
    DonorRegistration.Delete();
}
//PROFIT-T
function HandleDonorReceipt(){
    DonorReceipt.Save();
    DonorReceipt.View();
    DonorReceipt.Edit();
    DonorReceipt.Print();
    DonorReceipt.Download();
    DonorReceipt.Search();
    DonorReceipt.Post();
    DonorReceipt.Delete();
}
