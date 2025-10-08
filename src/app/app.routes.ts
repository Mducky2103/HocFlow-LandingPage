import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './pages/faq/faq.component';
import { UserGuideComponent } from './pages/user-guide/user-guide.component';
import { TermsComponent } from './pages/terms/terms.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'huong-dan', component: UserGuideComponent },
    { path: 'dieu-khoan', component: TermsComponent },
    { path: 'chinh-sach', component: PrivacyComponent },
    { path: '**', redirectTo: '' } // fallback route
];
