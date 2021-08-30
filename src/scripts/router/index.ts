import { Route, Router } from '@vaadin/router'; // for Webpack / Polymer CLI
import '../../views/video-courses.js';
import '../../views/protected/Home.js';



const routes: Route[] = [
  { path: '/', component: 'video-courses' },
  { path: '/home', component: 'vid-home' },
];

const content = document.getElementById('content');
export const router = new Router(content);
router.setRoutes(routes);
