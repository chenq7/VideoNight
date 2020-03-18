export const SHOW_SIDEBAR = "SHOW_SIDEBAR";
export const HIDE_SIDEBAR = "HIDE_SIDEBAR";

export const showSidebar = sidebar => ({
  type: SHOW_SIDEBAR,
  sidebar
});

export const hideSidebar = () => ({
  type: HIDE_SIDEBAR
});
