import getPassword from "../data";
export const STORE_WEAPON_PASS = "STORE_WEAPON_PASS";
export const STORE_STOLEN_PASS = "STORE_STOLEN_PASS";
export const STORE_DRUGS_PASS = "STORE_DRUGS_PASS";
export const STORE_FIREWALL_PASS = "STORE_FIREWALL_PASS";
export const STORE_FAKENEWS_PASS = "STORE_FAKENEWS_PASS";

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
<<<<<<< HEAD
  try {
    const password = await getPassword();
    dispatch({
      type: STORE_STOLEN_PASS,
      payload: password.stolengoods,
    });
    setTimeout(() => cb(), 500); 
  } catch (error) {
    console.log("Error al guardar contraseña", error);
  }
};

export const storeDrugsPass = (cb) => async (dispatch) => {
  try {
    const password = await getPassword();
    dispatch({
      type: STORE_DRUGS_PASS,
      payload: password.drug,
    });
    setTimeout(() => cb(), 500); 
  } catch (error) {
    console.log("Error al guardar contraseña", error);
  }
};

export const storeFirewallPass = (cb) => async (dispatch) => {
  try {
    const password = await getPassword();
    dispatch({
      type: STORE_FIREWALL_PASS,
      payload: password.firewall,
    });
    setTimeout(() => cb(), 500); 
  } catch (error) {
    console.log("Error al guardar contraseña", error);
  }
};

export const storeFakenewsPass = (cb) => async (dispatch) => {
  try {
    const password = await getPassword();
    dispatch({
      type: STORE_FAKENEWS_PASS,
      payload: password.fakenews,
    });
    setTimeout(() => cb(), 500); 
  } catch (error) {
    console.log("Error al guardar contraseña", error);
  }
};

=======
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
>>>>>>> 03df02d9737e4d2125773350056a7d5f634e8c26
