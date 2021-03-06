import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';
import {
    App,
    Chat,
    Widgets,
    About,
    Login,
    LoginSuccess,
    Survey,
    NotFound,
    Pagination,
    Hello,
    Product,
    CustomerOrder,
    CustomerEdit,
    Customer,
    AddNewCustomAttribute,
    AddGwpByExcel,
    Order,
    OrderDetailCancelDetail,
    AccountEdit,
    AccountSetting,
    ProductBestSeller,
    ProductExclusive,
    ProductManageCustomAttribute,
    ProductHotItem,
    AddParentProduct,
    OrderDetailEditDetail,
    AddProduct,
    Marketing,
    MarketingAddNewGwp,
    MarketingAddNewCampaign,
    MasterBrandAndMember,
    MarketingCampaignInfo,
    GetDiscountAmountOff,
    BuyItem,
    DiscountPercentOff,
    BuyFirststTime,
    SpecificGroup,
    AddNewCartRuleByPercent,
    AddNewCartRuleByAmount,
    GwpBuyAmount,
    GwpBuyAny,
    GwpBuyItem,
    AddNewCartRule,
    ShippingGlobalFeeFreeCountry,
    ShippingGlobalFeeWithShippingFee,
    AddNewShippingFeeGlobal,
    AddSpecificGroup,
    GetFreeShippingFee,
    AddSpecificGroupBrand,
    AddNewCampaignPercentDiscount,
    AddNewCampaignGetDiscountPercent,
    AddNewCampaignGetDiscountPercentOff,
    AddNewCampaignBuyItemXGetDiscount,
    AddNewCampaignBuyXGetY,
    AddNewCampaignThirdItem,

  } from 'containers';

export default (store) => {
  const requireLogin = (nextState, replace, cb) => {
    function checkAuth() {
      const { auth: { user }} = store.getState();
      if (!user) {
        // oops, not logged in, so can't be here!
        replace('/');
      }
      cb();
    }

    if (!isAuthLoaded(store.getState())) {
      store.dispatch(loadAuth()).then(checkAuth);
    } else {
      checkAuth();
    }
  };

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Login}/>

      { /* Routes requiring login */ }
      <Route onEnter={requireLogin}>
        <Route path="chat" component={Chat}/>
        <Route path="loginSuccess" component={LoginSuccess}/>
      </Route>

      { /* Routes */ }
      <Route path="about" component={About}/>
      <Route path="login" component={Login}/>
      <Route path="pagination" component={Pagination}/>
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>
      <Route path="hello" component={Hello}/>
      <Route path="product" component={Product}/>
      <Route path="product/exclusive" component={ProductExclusive}/>
      <Route path="product/bestseller" component={ProductBestSeller}/>
      <Route path="product/hotitem" component={ProductHotItem}/>
      <Route path="customer" component={Customer}/>
      <Route path="customer/order" component={CustomerOrder}/>
      <Route path="customer/edit" component={CustomerEdit}/>
      <Route path="customattribute" component={AddNewCustomAttribute}/>
      <Route path="addgwpbyexcel" component={AddGwpByExcel}/>
      <Route path="orders" component={Order}/>
      <Route path="orders/canceldetail" component={OrderDetailCancelDetail}/>
      <Route path="accountsetting" component={AccountSetting}/>
      <Route path="accountedit" component={AccountEdit}/>
      <Route path="product/managecustomattribute" component={ProductManageCustomAttribute}/>
      <Route path="parentproduct/add" component={AddParentProduct}/>
      <Route path="orderdetailcanceldetail/edit" component={OrderDetailEditDetail}/>
      <Route path="marketing/addnewgwp" component={MarketingAddNewGwp}/>
      <Route path="product/add" component={AddProduct}/>
      <Route path="marketing" component={Marketing}/>
      <Route path="marketing/addnewcampaign" component={MarketingAddNewCampaign}/>
      <Route path="marketing/masterbandandmember" component={MasterBrandAndMember}/>
      <Route path="marketing/setcampaign" component={MarketingAddNewCampaign}/>
      <Route path="marketing/campaign/info" component={MarketingCampaignInfo}/>
      <Route path="marketing/addnewcampaign/getdiscountamountoff" component={GetDiscountAmountOff}/>
      <Route path="marketing/addnewcampaign/buyitem" component={BuyItem}/>
      <Route path="marketing/addnewcampaign/discountpercentoff" component={DiscountPercentOff}/>
      <Route path="marketing/addnewcampaign/buyfirststtime" component={BuyFirststTime}/>
      <Route path="marketing/specificgroup" component={SpecificGroup}/>
      <Route path="marketing/addnewcartrulebypercent" component={AddNewCartRuleByPercent}/>
      <Route path="marketing/gwp/buyamount" component={GwpBuyAmount}/>
      <Route path="marketing/gwp/buyany" component={GwpBuyAny}/>
      <Route path="marketing/gwp/buyitem" component={GwpBuyItem}/>
      <Route path="marketing/addnewcartrule" component={AddNewCartRule}/>
      <Route path="marketing/addnewcartrulebyamount" component={AddNewCartRuleByAmount}/>
      <Route path="marketing/shippingglobalfeefreecountry" component={ShippingGlobalFeeFreeCountry}/>
      <Route path="marketing/shippingglobalfeewithshippingfee" component={ShippingGlobalFeeWithShippingFee}/>
      <Route path="marketing/addnewshippingfeeglobal" component={AddNewShippingFeeGlobal}/>
      <Route path="marketing/addspecificgroup" component={AddSpecificGroup}/>
      <Route path="marketing/getfreeshippingfee" component={GetFreeShippingFee}/>
      <Route path="marketing/addspecificgroup/brand" component={AddSpecificGroupBrand}/>
      <Route path="marketing/percentdiscount" component={AddNewCampaignPercentDiscount}/>
      <Route path="marketing/getdiscountpercent" component={AddNewCampaignGetDiscountPercent}/>
      <Route path="marketing/getdiscountpercentoff" component={AddNewCampaignGetDiscountPercentOff}/>
      <Route path="marketing/buyxgetdiscount" component={AddNewCampaignBuyItemXGetDiscount}/>
      <Route path="marketing/buyxgety" component={AddNewCampaignBuyXGetY}/>
      <Route path="marketing/thirditem" component={AddNewCampaignThirdItem}/>


      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
