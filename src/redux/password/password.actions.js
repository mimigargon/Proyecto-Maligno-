import getPassword from "../data";
export const STORE_WEAPON_PASS = "STORE_WEAPON_PASS";

export const storeWeaponPass = (cb) => async (dispatch) => {
  try {
    const password = await getPassword();
    dispatch({
      type: STORE_WEAPON_PASS,
      payload: password.weapon,
    });
    setTimeout(() => cb(), 500); 
  } catch (error) {
    console.log("Error al guardar contraseña", error);
  }
};

export const storeStolenPass = (cb) => async (dispatch) => {
    try {
        const password = await getPassword();
        dispatch({
          type: STORE_WEAPON_PASS,
          payload: password.weapon,
        });
        setTimeout(() => cb(), 500); 
      } catch (error) {
        console.log("Error al guardar contraseña", error);
      }
    
}
