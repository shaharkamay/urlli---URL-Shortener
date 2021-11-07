import './styles/style.css';
import './images/url-logo.png';

import { starter, indexStarter, analyticsStarter, dashboardStarter } from '../scripts/services/dom';

starter();

if(location.href.endsWith('analytics/') || location.href.endsWith('analytics')) {
    //domain/analytics
    console.log('endsWith(analytics/)')
    analyticsStarter();
} else if(location.href.endsWith('dashboard/') || location.href.endsWith('dashboard')) {
    //domain/dashboard
    console.log('endsWith(dashboard/)')
    dashboardStarter();
} else {
    //Default: domain/
    console.log('endsWith(/)')
    indexStarter();
}
