import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Accountpage from "./Pages/Accountpage/Accountpage";
import BuyingInfopage from "./Pages/BuyingInfopage/BuyingInfopage";
import Buyingpage from "./Pages/Buyingpage/Buyingpage";
import Categories from "./Pages/Categories/Categories";
import Categoryproducts from "./Pages/Categoryproducts/Categoryproducts";
import Homepage from "./Pages/Homepage/Homepage";
import Notificationpage from "./Pages/Notificationpage/Notificationpage";
import Paymentmethodpage from "./Pages/Paymentmethodpage/Paymentmethodpage";
import Privacypolicy from "./Pages/Privacypolicy/Privacypolicy";
import Privacysettings from "./Pages/Privacysettings/Privacysettings";
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
import Termsofuse from "./Pages/Termsofuse/Termsofuse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:categoryId" element={<Categoryproducts />} />
        <Route path="/account" element={<Accountpage />} />
        <Route path="/account/settings" element={<Settingspage />} />
        <Route path="/account/profile" element={<Profilepage />} />
        <Route path="/account/storage" element={<Storagepage />} />
        <Route path="/account/buying" element={<Buyingpage />} />
        <Route path="/account/selling" element={<Sellingpage />} />
        <Route path="/account/bids" element={<Storagepage />} />
        <Route path="/account/ask" element={<Buyingpage />} />
        <Route path="/account/portfolio" element={<Storagepage />} />
        <Route path="/account/following" element={<Buyingpage />} />
        <Route path="/account/how_it_works" element={<Sellingpage />} />
        <Route path="/account/suggest_a_product" element={<Storagepage />} />
        <Route path="/account/support" element={<Buyingpage />} />

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
