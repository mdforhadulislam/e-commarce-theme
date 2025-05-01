from django.contrib import admin

# Register your models here.
from .models import *
admin.site.register(Logo)
admin.site.register(FooterLogo)
admin.site.register(TeamMember)
admin.site.register(Contact)
admin.site.register(About)
admin.site.register(PrivacyPolicy)
admin.site.register(TermsAndConditions)
admin.site.register(Faq)
admin.site.register(BlogDeatils)
admin.site.register(Blog)
admin.site.register(UserTrack)

