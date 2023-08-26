import axios from "../../node_modules/axios/index";


// const baseURL = `http://localhost:8000/api/smoke/corridor`

const baseURL = 'https://smok-e.ru/api/'
const baseURL_deploy = `${baseURL}smoke/corridor/`

export default class SmokeCalcService {
    static async getSmokeCalc(
            {room_systemname,
            room_name,
            room_level,
            room_area_m2,
            room_high_m,
            room_fire_load_density,
            room_calorific_value_fire_load,
            room_temp_inside,
            corridor_system_name,
            corridor_level,
            corridor_hight,
            corridor_door_hight,
            corridor_door_width,
            corridor_area,
            corridor_lenght,
            coef_building_type,
            corridor_temp}
            ) 
        {
        const response = await axios.get(baseURL_deploy, {
            params: {
                room_systemname : room_systemname,
                room_name : room_name,
                room_level : room_level,
                room_area_m2 : room_area_m2,
                room_high_m : room_high_m,
                room_fire_load_density : room_fire_load_density,
                room_calorific_value_fire_load : room_calorific_value_fire_load,
                room_temp_inside : room_temp_inside,
                corridor_system_name : corridor_system_name,
                corridor_level : corridor_level,
                corridor_hight : corridor_hight,
                corridor_door_hight : corridor_door_hight,
                corridor_door_width : corridor_door_width,
                corridor_area : corridor_area,
                corridor_lenght : corridor_lenght,
                coef_building_type : coef_building_type,
                corridor_temp : corridor_temp
            }
        })
        return response
    }
} 

 