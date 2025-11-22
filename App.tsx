
import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { CollectionsPage } from './pages/CollectionsPage';
import { JewelryPage } from './pages/JewelryPage';
import { EngagementPage } from './pages/EngagementPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AccountPage } from './pages/AccountPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';
import { GiftsPage } from './pages/GiftsPage';
import { InfoPage } from './pages/InfoPage';
import { CraftsmanshipPage } from './pages/CraftsmanshipPage';
import { OrderSuccessPage } from './pages/OrderSuccessPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { useUIStore } from './store/uiStore';
import { ShoppingBag } from './components/ShoppingBag';
import { LoginRequiredModal } from './components/LoginRequiredModal';
import { NotificationHandler } from './components/NotificationHandler';
import { SearchModal } from './components/SearchModal';

const App: React.FC = () => {
  const { currentPage, currentPagePayload } = useUIStore();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'jewelry':
        return <JewelryPage category={currentPagePayload as string} />;
      case 'collections':
        return <CollectionsPage collectionId={currentPagePayload as string} />;
      case 'engagement':
        return <EngagementPage subCategory={currentPagePayload as string} />;
      case 'product':
        return <ProductDetailPage productId={currentPagePayload as string} />;
      case 'account':
        return <AccountPage />;
      case 'checkout':
        return <CheckoutPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'about':
        return <AboutPage />;
      case 'gifts':
        return <GiftsPage filter={currentPagePayload as string} />;
      case 'info':
        return <InfoPage section={currentPagePayload as string} />;
      case 'craftsmanship':
        return <CraftsmanshipPage />;
      case 'order-success':
        return <OrderSuccessPage orderId={currentPagePayload as string} />;
      case 'order-tracking':
        return <OrderTrackingPage orderId={currentPagePayload as string} />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#FAF9F6]">
      <Header />
      <main className="min-h-screen">
        {renderPage()}
      </main>
      <Footer />
      <ShoppingBag />
      <SearchModal />
      <LoginRequiredModal />
      <NotificationHandler />
    </div>
  );
};

export default App;
