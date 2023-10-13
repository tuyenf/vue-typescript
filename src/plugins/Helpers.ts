export class Helpers {
    static lazyload(view: string) {
        return () => import(`../views/pages/${view}.vue`)
    }
}
