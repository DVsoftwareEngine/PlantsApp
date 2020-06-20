import Home from "./Home/Home.svelte";
import Profile from "./Profile/Profile.svelte";

import { writable } from 'svelte/store';
const router = {
  '/': Home,
  '/home': Home,
  '/profile': Profile
}
export default router;
export const curRoute = writable('/home');