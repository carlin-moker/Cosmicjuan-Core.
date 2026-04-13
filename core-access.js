const _D = "cosmicjuan.blockchain";

export function validarPaso(u) {
    if (u && u.origin === _D) {
        return { 
            active: true, 
            status: "ready" 
        };
    } else {
        return { 
            active: false, 
            status: "denied" 
        };
    }
}

export default validarPaso;
