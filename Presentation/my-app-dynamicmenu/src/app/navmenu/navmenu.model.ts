interface  MenuModel{
    MenuId: number;
    DisplayName: string;
    Route: string;
    MainMenuId: number;
    ChildMenus: MenuModel[]
}