import { Login } from "./Login.cy";
//GL-S
import * as Period from "./Financial/GeneralLedger/Setup/Period.cy";
import * as TaxDetail from "./Financial/GeneralLedger/Setup/TaxDetail.cy";
import * as TaxSchdule from "./Financial/GeneralLedger/Setup/TaxSchdule.cy";
import * as Bank from "./Financial/GeneralLedger/Setup/Bank.cy";
import * as Aging from "./Financial/GeneralLedger/Setup/Aging.cy";
import * as payment from "./Financial/GeneralLedger/Setup/payment.cy";
import * as PaymentMode from "./Financial/GeneralLedger/Setup/paymentMode.cy";
import * as Cards from "./Financial/GeneralLedger/Setup/Cards.cy";
import * as Shipping from "./Financial/GeneralLedger/Setup/Shipping.cy";
import * as Territories from "./Financial/GeneralLedger/Setup/Territories.cy";
import * as Curency from "./Financial/GeneralLedger/Setup/Currency.cy";
import * as Extendedjobs from "./Financial/GeneralLedger/Setup/Extendedjobs.cy";
import * as SegmentValue from "./Financial/GeneralLedger/Setup/SegmentValue.cy";
//import * as Jobs from "../Financial/GeneralLedger/Setup/Jobs.cy";
// import * as Budget from "../Financial/GeneralLedger/Setup/Budgets.cy";
//GL-T
import * as BankTransfer from "./Financial/GeneralLedger/Transaction/BankTransfers.cy";
import * as JournalEntry from "./Financial/GeneralLedger/Transaction/JournalEntry.cy";
import * as JournalPayment from "./Financial/GeneralLedger/Transaction/JournalPayment.cy";
import * as JournalReceipt from "./Financial/GeneralLedger/Transaction/JournalReceipt.cy";
import * as PattyCash from "../Financial/GeneralLedger/Transaction/PattyCash.cy";
//PAY-S
import * as LCCategories from "./Financial/Payable/Setup/LCCategories.cy";
import * as LCCode from "./Financial/Payable/Setup/LCCode.cy";
import * as VendorCategories from "./Financial/Payable/Setup/VendorCategories.cy";
import * as VendorProfile from "./Financial/Payable/Setup/VendorProfile.cy";
import * as Vendors from "./Financial/Payable/Setup/Vendors.cy";
//PAY-T
import * as VendorDoc from "./Financial/Payable/Transaction/VendorDoc.cy";
import * as VendorInvoice from "./Financial/Payable/Transaction/VendorInvoice.cy";
import * as VendorPayments from "./Financial/Payable/Transaction/VendorPayments.cy";
//RECEIVABLE-S
import * as CustomerCategories from "./Financial/Receivable/Setup/CustomerCategories.cy";
import * as CustomerProfile from "./Financial/Receivable/Setup/CustomerProfiles.cy";
import * as Customers from "./Financial/Receivable/Setup/Customers.cy";
//RECEIVABLE-T
import * as CustomerDoc from "./Financial/Receivable/Transaction/CustomerDoc.cy";
import * as CustomerInvoice from "./Financial/Receivable/Transaction/CustomerInvoice.cy";
import * as CustomerReceipt from "./Financial/Receivable/Transaction/CustomerReceipt.cy";
//PROFIT-S
import * as Campaign from "./Financial/Profit/Setup/Campaign.cy";
import * as CareOf from "./Financial/Profit/Setup/CareOf.cy";
import * as DonorRegistration from "./Financial/Profit/Setup/DonorRegistration.cy";
//PROFIT-T
import * as DonorReceipt from "./Financial/Profit/Transaction/DonorReceipts.cy";
//SOP-S
//SOP-T
import SaleQuotation from "./SOP/Transaction/SaleQuotation.cy";
import SalesOrder from "./SOP/Transaction/SalesOrder.cy";
import DeliveryOrder from "./SOP/Transaction/DeliveryOrder.cy";
import Gatepass from "./SOP/Transaction/Gatepass.cy";
import SalesInvoice from "./SOP/Transaction/SaleInvoice.cy";
import SaleReturn from "./SOP/Transaction/SaleReturn.cy";
//POP-S
//POP-T
import Requisitions from "./POP/Transaction/PurchaseRequisition.cy";
import PurQuote from "./POP/Transaction/PurchaseQuote.cy";
import PurOrder from "./POP/Transaction/PurchaseOrder.cy";
import ReceiptNote from "./POP/Transaction/ReceiptNote.cy";
import PurInvoice from "./POP/Transaction/PurchaseInvoice.cy";
import PurReturn from "./POP/Transaction/PurchaseReturn.cy";
//Inventory-S
import locations from "./Inventory/Setup/locations.cy";
import UnitofMeasures from "./Inventory/Setup/UnitofMeasures.cy";
import Attributes from "./Inventory/Setup/Attributes.cy";
import ItemClass from "./Inventory/Setup/ItemClass.cy";
import ItemAssignment from "./Inventory/Setup/ItemAssignment.cy";
import Items from "./Inventory/Setup/Items.cy";
//Inventory-T
import Requisition from "./Inventory/Transaction/Requisition.cy";
import Transfer from "./Inventory/Transaction/Transfer.cy";
import Receiving from "./Inventory/Transaction/Receiving.cy";
import Adjustment from "./Inventory/Transaction/Adjustment.cy";

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
        //SOPS
        //SOP-T
        HandleSaleQuotation();
        HandleSalesOrder();
        HandleDeliveryOrder();
        HandleGatepass();
        HandleSalesInvoice();
        //HandleSaleReturn();
        //POPS
        //POPT
        HandleRequisitions();
        HandlePurQuote();
        HandlePurOrder();
        HandleReceiptNote();
        HandlePurInvoice();
        //HandlePurReturn();
        //Inventory-S
        HandleLocations();
        HandleUnitofMeasures();
        HandleAttributes();
        HandleItemClass();
        HandleItemAssignment();
        HandleItems();
        //Inventory-T
        HandleRequisition();
        HandleTransfer();
        HandleReceiving();
        HandleAdjustment();
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
//SOP-S
//SOP-T
function HandleSaleQuotation(){
    SaleQuotation.Save();
    SaleQuotation.View();
    SaleQuotation.Edit();
    SaleQuotation.Download();
    SaleQuotation.Search();
    SaleQuotation.Post();
    SaleQuotation.Delete();
}
function HandleSalesOrder(){
    SalesOrder.Save();  
    SalesOrder.View();
    SalesOrder.Edit();
    SalesOrder.Download();
    SalesOrder.Search();
    SalesOrder.ConvertToDelOrder();
    SalesOrder.Delete();
    SalesOrder.Post();
}
function HandleDeliveryOrder(){
    DeliveryOrder.Save();
    DeliveryOrder.View();
    DeliveryOrder.Edit();
    DeliveryOrder.Download();
    DeliveryOrder.Search();
    DeliveryOrder.Print();
    DeliveryOrder.ConvertToSales();
    DeliveryOrder.UpdateExpiry();
    DeliveryOrder.Delete();
    DeliveryOrder.Post();
}
function HandleGatepass(){
    Gatepass.Save();  
    Gatepass.View();
    Gatepass.Edit();
    Gatepass.Download();
    Gatepass.Search();
    Gatepass.Print();
    Gatepass.Delete();
    Gatepass.Post();
}
function HandleSalesInvoice(){
    SalesInvoice.Save(); 
    SalesInvoice.View();
    SalesInvoice.Edit();
    SalesInvoice.Download();
    SalesInvoice.Search();
    SalesInvoice.Print();
    SalesInvoice.Delete();
    SalesInvoice.Post();
}
function HandleSaleReturn(){

}
//POP-S
//POP-T
function HandleRequisitions(){
    Requisitions.Save(); 
    Requisitions.View();      
    Requisitions.Edit();
    Requisitions.Download();
    Requisitions.ConvertToPO();
    Requisitions.Search();
    Requisitions.Delete();
    Requisitions.Post();
}
function HandlePurQuote(){
    PurQuote.Save();
    PurQuote.View();
    PurQuote.Edit();
    PurQuote.Download();
    PurQuote.ConvertToPO();
    PurQuote.Search();
    PurQuote.Delete();
    PurQuote.Post();
}
function HandlePurOrder(){
    PurOrder.Save();
    PurOrder.View();       
    PurOrder.Edit();
    PurOrder.ConvertToGR();
    PurOrder.Download();
    PurOrder.Search();
    PurOrder.Delete();
    PurOrder.Post();
}
function HandleReceiptNote(){
    ReceiptNote.Save();
    ReceiptNote.View();       
    ReceiptNote.Edit();
    ReceiptNote.Download();
    ReceiptNote.Search();
    ReceiptNote.Delete();
    ReceiptNote.Post();
}
function HandlePurInvoice(){
    PurInvoice.Save();
    PurInvoice.View();       
    PurInvoice.Edit();
    PurInvoice.Download();
    PurInvoice.Search();
    PurInvoice.Delete();
    PurInvoice.Post();
}
function HandlePurReturn(){

}
//Inventory-S
function HandleLocations(){
    locations.Save();       
    locations.Edit();
    locations.Delete();
    locations.Download();
}
function HandleUnitofMeasures(){
    UnitofMeasures.Save();       
    UnitofMeasures.Edit();
    UnitofMeasures.Delete();
    UnitofMeasures.Download();
}
function HandleAttributes(){
    Attributes.Save();       
    Attributes.Edit();
    Attributes.Delete();
    Attributes.Download();
}
function HandleItemClass(){
    ItemClass.Save();       
    ItemClass.Edit();
    ItemClass.Delete();
    ItemClass.Download();
}
function HandleItemAssignment(){
    ItemAssignment.Save(); 
}
function HandleItems(){
    Items.Save();       
    Items.Edit();
    Items.Delete();
    Items.Download();
}
//Inventory-T
function HandleRequisition(){
    Requisition.Save(); 
    Requisition.View();      
    Requisition.Edit();
    Requisition.Download();
    Requisition.Search();
    Requisition.ConvertToTransfer();
    Requisition.Delete();
    Requisition.Post();
}
function HandleTransfer(){
    Transfer.Save(); 
    Transfer.View();      
    Transfer.Edit();
    Transfer.Download();
    Transfer.Search();
    Transfer.Delete();
    Transfer.Post();
}
function HandleReceiving(){
    Receiving.Save();       
    Receiving.Edit();
    Receiving.View();
    Receiving.Delete();
    Receiving.Download();
}
function HandleAdjustment(){
    Adjustment.Save(); 
    Adjustment.View();      
    Adjustment.Edit();  
    Adjustment.Download();
    Adjustment.Search();
    Adjustment.Delete();
    Adjustment.Post();
}


