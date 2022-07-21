import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accountpage from "./Pages/Accountpage/Accountpage";
import Askpage from "./Pages/Askpage/Askpage";
import Bidspage from "./Pages/Bidspage/Bidspage";
import BuyingInfopage from "./Pages/BuyingInfopage/BuyingInfopage";
import Buyingpage from "./Pages/Buyingpage/Buyingpage";
import Categories from "./Pages/Categories/Categories";
import Categoryproducts from "./Pages/Categoryproducts/Categoryproducts";
import Followingpage from "./Pages/Followingpage/Followingpage";
import Homepage from "./Pages/Homepage/Homepage";
import Howitworkspage from "./Pages/Howitworkspage/Howitworkspage";
import Notificationpage from "./Pages/Notificationpage/Notificationpage";
import Paymentmethodpage from "./Pages/Paymentmethodpage/Paymentmethodpage";
import Portfoliopage from "./Pages/Portfoliopage/Portfoliopage";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
import Privacysettings from "./Pages/Privacysettings/Privacysettings";
import Productpage from "./Pages/Productpage/Productpage";
import Profilepage from "./Pages/Profilepage/Profilepage";
import Returnaddresspage from "./Pages/Returnaddresspage/Returnaddresspage";
import Sellinginfopage from "./Pages/Sellinginfopage/Sellinginfopage";
import Sellingpage from "./Pages/Sellingpage/Sellingpage";
import Settingspage from "./Pages/Settingspage/Settingspage";
import Shippingaddresspage from "./Pages/Shippingaddresspage/Shippingaddresspage";
import Storagepage from "./Pages/Storagepage/Storagepage";
import Billinginfo from "./Pages/Subpages/Billinginfo/Billinginfo";
import Returnaddressinfo from "./Pages/Subpages/Returnaddressinfo/Returnaddressinfo";
import Sellinginfo from "./Pages/Subpages/Sellinginfo/Sellinginfo";
import Shippinginfo from "./Pages/Subpages/Shippinginfo/Shippinginfo";
import Suggestaproduct from "./Pages/Suggestaproduct/Suggestaproduct";
import Supportpage from "./Pages/Supportpage/Supportpage";
import Termsofuse from "./Pages/Termsofuse/Termsofuse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Categoryproducts />} />
        <Route path="/product/:productId" element={<Productpage />} />
        <Route path="/account" element={<Accountpage />} />
        <Route path="/account/settings" element={<Settingspage />} />
        <Route path="/account/profile" element={<Profilepage />} />
        <Route path="/account/storage" element={<Storagepage />} />
        <Route path="/account/buying" element={<Buyingpage />} />
        <Route path="/account/selling" element={<Sellingpage />} />
        <Route path="/account/bids" element={<Bidspage />} />
        <Route path="/account/ask" element={<Askpage />} />
        <Route path="/account/portfolio" element={<Portfoliopage />} />
        <Route path="/account/following" element={<Followingpage />} />
        <Route path="/account/how_it_works" element={<Howitworkspage />} />
        <Route path="/account/suggest_a_product" element={<Suggestaproduct />} />
        <Route path="/account/support" element={<Supportpage />} />

        <Route
          path="/account/settings/buying_info"
          element={<BuyingInfopage />}
        />
        <Route
          path="/account/settings/buying_info/shipping_information"
          element={<Shippinginfo />}
        />
        <Route
          path="/account/settings/buying_info/billing_information"
          element={<Billinginfo />}
        />
        <Route
          path="/account/settings/selling_info"
          element={<Sellinginfopage />}
        />
        <Route
          path="/account/settings/selling_info/selling_information"
          element={<Sellinginfo />}
        />
        <Route
          path="/account/settings/payment_method"
          element={<Paymentmethodpage />}
        />

        <Route
          path="/account/settings/return_address"
          element={<Returnaddresspage />}
        />
        <Route
          path="/account/settings/return_address/return_address_information"
          element={<Returnaddressinfo />}
        />
        <Route
          path="/account/settings/shipping_address"
          element={<Shippingaddresspage />}
        />
        <Route
          path="/account/settings/notification"
          element={<Notificationpage />}
        />
        <Route
          path="/account/settings/privacy_settings"
          element={<Privacysettings />}
        />
        <Route
          path="/account/settings/privacy_policy"
          element={<Privacypolicy />}
        />
        <Route path="/account/settings/terms_of_use" element={<Termsofuse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
