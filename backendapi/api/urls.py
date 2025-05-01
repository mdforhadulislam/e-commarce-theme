from django.urls import path, re_path
from django.conf.urls import include
from rest_framework import routers
from user.views import *
from category.views import *
from checkout.views import *
from coupon.views import *
from giftcard.views import *
from landingController.views import *
from notification.views import *
from order.views import *
from product.views import *
from review.views import *
from shipping.views import *
from store.views import *
from groupsystem.views import *



router = routers.DefaultRouter()
router.register(r'user', Accounts, basename='user-accounts')
router.register(r'category', CategoryViewSet, basename='category')
router.register(r'checkout', CheckoutViewSet, basename='checkout')
router.register(r'coupon', CouponViewSet, basename='coupon')
router.register(r'giftcard', GiftCardViewSet, basename='giftcard')
router.register(r'notification', NotificationViewSet,basename='notifications')
router.register(r'order', OrderViewSet, basename='order')
router.register(r'product', ProductViewSet , basename='product')
router.register(r'product/image', ProductImageViewSet , basename='product-image')
router.register(r'reviews', ReviewViewSet , basename='reviews')
router.register(r'shipping', ShippingViewSet , basename='shipping')
router.register(r'store', StoreViewSet , basename='store')
router.register(r'group', GroupsForStorViewSet)
router.register(r'group/post', GroupPostViewSet)
router.register(r'group/comment', GroupCommentViewSet)
router.register(r'group/image', GroupImageViewSet)


 
router.register(r'land/logos', LogoViewSet)
router.register(r'land/footer-logos', FooterLogoViewSet)
router.register(r'land/team-members', TeamMemberViewSet)
router.register(r'land/contacts', ContactViewSet)
router.register(r'land/about', AboutViewSet)
router.register(r'land/privacy-policy', PrivacyPolicyViewSet)
router.register(r'land/terms-and-conditions', TermsAndConditionsViewSet)
router.register(r'land/faqs', FaqViewSet)
router.register(r'land/blog-details', BlogDetailsViewSet)
router.register(r'land/blogs', BlogViewSet)
router.register(r'land/user-track', UserTrackViewSet, basename='user-tracks')


urlpatterns = [
    re_path(r'^', include(router.urls)), 
    path('auth-token/', AuthToken.as_view(), name='auth-token'),
] 