import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import SmokeRow from './SmokeRow';
import SmokeRowResult from './SmokeRowResult';





const SmokeCoridorTable = () => {
    return (
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
        <Toolbar />
                
            <div style={
                {maxWidth:'800px'}
            }>
                <h1 style={{display:'flex', justifyContent:'center', margin:'10px'}}> 
                    Расчет вытяжной вентиляции из коридора 
                </h1>
                <SmokeRow
                    number = "1" nameParameter = 'room_systemname'
                    parameter = {smokeParametersInput.room_systemname} 
                    sign = ''
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <SmokeRow
                    number = "2" nameParameter = 'room_name'
                    parameter = {smokeParametersInput.room_name} 
                    sign = ''
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <SmokeRow
                    number = "3" nameParameter = 'room_level'
                    parameter = {smokeParametersInput.room_level} 
                    sign = ''
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <SmokeRow
                    number = "4" nameParameter = 'room_area_m2'
                    parameter = {smokeParametersInput.room_area_m2} 
                    sign = ''
                    setProps = {handleChangeInput}
                    units = "m2"
                    />
                <SmokeRow
                    number = "5" nameParameter = 'room_high_m'
                    parameter = {smokeParametersInput.room_high_m} 
                    sign = 'hf'
                    setProps = {handleChangeInput}
                    units = "m"
                    />
                <SmokeRow
                    number = "6" nameParameter = 'room_fire_load_density'
                    parameter = {smokeParametersInput.room_fire_load_density} 
                    sign = 'qп'
                    setProps = {handleChangeInput}
                    units = " MJ/m2"
                    />
                <SmokeRow
                    number = "7" nameParameter = 'room_calorific_value_fire_load'
                    parameter = {smokeParametersInput.room_calorific_value_fire_load} 
                    sign = 'Qнср'
                    setProps = {handleChangeInput}
                    units = " MJ/kg"
                    />
                <SmokeRow
                    number = "8" nameParameter = 'room_temp_inside'
                    parameter = {smokeParametersInput.room_temp_inside} 
                    sign = 'tr'
                    setProps = {handleChangeInput}
                    units = " C "
                    />
                <SmokeRow
                    number = "9" nameParameter = 'corridor_system_name'
                    parameter = {smokeParametersInput.corridor_system_name} 
                    sign = ''
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <SmokeRow
                    number = "10" nameParameter = 'corridor_hight'
                    parameter = {smokeParametersInput.corridor_hight} 
                    sign = 'H'
                    setProps = {handleChangeInput}
                    units = "m"
                    />
                <SmokeRow
                    number = "11" nameParameter = 'corridor_door_hight'
                    parameter = {smokeParametersInput.corridor_door_hight} 
                    sign = 'Hd'
                    setProps = {handleChangeInput}
                    units = "m"
                    />
                <SmokeRow
                    number = '12' nameParameter = 'corridor_door_width'
                    parameter = {smokeParametersInput.corridor_door_width} 
                    sign = 'bd'
                    setProps = {handleChangeInput}
                    units = "m"
                    />
                <SmokeRow
                    number = '13' nameParameter = 'corridor_area'
                    parameter = {smokeParametersInput.corridor_area} 
                    sign = 'Ac'
                    setProps = {handleChangeInput}
                    units = "m2"
                    />
                <SmokeRow
                    number = '14' nameParameter = 'corridor_lenght'
                    parameter = {smokeParametersInput.corridor_lenght} 
                    sign = 'lc'
                    setProps = {handleChangeInput}
                    units = "m"
                    />
                <SmokeRow
                    number = '15' nameParameter = 'coef_building_type'
                    parameter = {smokeParametersInput.coef_building_type} 
                    sign = 'ksm'
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <SmokeRow
                    number = '16' nameParameter = 'corridor_temp'
                    sign = 'trk'
                    parameter = {smokeParametersInput.corridor_temp} 
                    setProps = {handleChangeInput}
                    units = ""
                    />
                <div style={{border:'1px solid teal'}}></div>

                <SmokeRowResult
                    number = '17' nameParameter = 'Помещение - объем'
                    sign='V'
                    parameter = {smokeParametersOutput.room_volume_m3} 
                    units = "m3"
                    />
                <SmokeRowResult
                    number = '18' nameParameter = 'Суммарная площадь внутренней поверхности'
                    sign='Fw'
                    parameter = {smokeParametersOutput.Fw} 
                    units = "m2"
                    />
                <SmokeRowResult
                    number = '19' nameParameter = 'Суммарная площадь проемов помещения'
                    sign = 'A0'
                    parameter = {smokeParametersOutput.A0} 
                    units = "m2"
                    />
                <SmokeRowResult
                    number = '20' nameParameter = 'Низшая теплота сгорания древесины'
                    sign= 'Qнд'
                    parameter = {smokeParametersOutput.CALORIFIC_VALUE_WOOD} 
                    units = "MJ/kg"
                    />
                <SmokeRowResult
                    number = '21' nameParameter = 'Удельная приведенная пожарная нагрузка, к стенам'
                    sign = 'qk'
                    parameter = {smokeParametersOutput.Fw_unit_fire_load_by_walling} 
                    units = "MJ/m2"
                    />
                <SmokeRowResult number = '22' 
                    nameParameter = 'Удельное количество воздуха для сгорания' 
                    sign = 'V0'
                    parameter = {smokeParametersOutput.v0_air_for_burn} 
                    units = "m3/kg"
                    />
                <SmokeRowResult number = '23' 
                    nameParameter = 'Проемность помещения' 
                    sign='П'
                    parameter = {smokeParametersOutput.room_opening_rate} 
                    units = "m^0.5"
                    />
                <SmokeRowResult number = '24' 
                    nameParameter = 'Удельное критическое количество пожарной нагрузки' 
                    sign='qkкр'
                    parameter = {smokeParametersOutput.unit_fire_load_critical} 
                    units = "kg/m2"
                    />
                <SmokeRowResult number = '25' 
                    nameParameter = 'Удельная приведенная пожарная нагрузка к площади' 
                    sign='q0'
                    parameter = {smokeParametersOutput.unit_fire_load_by_floor_square} 
                    units = "kg/m2"
                    />
                <SmokeRowResult number = '26' 
                    nameParameter = 'Вид объемного пожара' 
                    sign = ''
                    parameter = {smokeParametersOutput.fire_type} 
                    units = ""
                    />
                <SmokeRowResult number = '27' 
                    nameParameter = 'Начальная температура воздуха в помещении' 
                    sign='Tr'
                    parameter = {smokeParametersOutput.room_temp_inside_K} 
                    units = "K"
                    />
                <SmokeRowResult number = '28' 
                    nameParameter = 'Макс. среднеобъемная температура в помещении' 
                    sign = 'T0max'
                    parameter = {smokeParametersOutput.max_temp} 
                    units = "K"
                    />
                <SmokeRowResult number = '29' 
                    nameParameter = 'Температура газов, поступающих в коридор' 
                    sign='T0'
                    parameter = {smokeParametersOutput.temp_smoke_coridor} 
                    units = "C"
                    />
                <SmokeRowResult number = '30' 
                    nameParameter = 'Предельная толщина дымового слоя' 
                    sign='hsm'
                    parameter = {smokeParametersOutput.corridor_smoke_hight_limit} 
                    units = "m"
                    />
                <SmokeRowResult number = '31' 
                    nameParameter = 'Коридор - температура воздуха' 
                    sign='Trk'
                    parameter = {smokeParametersOutput.corridor_temp_K} 
                    units = "K"
                    />
                <SmokeRowResult number = '32' 
                    nameParameter = 'Коридор - температура дымовых газов' 
                    sign='Tsm'
                    parameter = {smokeParametersOutput.corridor_smoke_temp} 
                    units = "K"
                    />
                <SmokeRowResult number = '33' 
                    nameParameter = 'Коридор - площадь проема' 
                    sign='Ad'
                    parameter = {smokeParametersOutput.corridor_door_area} 
                    units = "m2"
                    />
                <SmokeRowResult number = '34' 
                    nameParameter = 'Массовый расход удаляемых дымовых газов' 
                    sign='Gsm'
                    parameter = {smokeParametersOutput.smoke_consumption_mass} 
                    units = "kg/sec"
                    />
                <SmokeRowResult number = '35' 
                    nameParameter = 'Плотность дымовых газов' 
                    sign='ρsm'
                    parameter = {smokeParametersOutput.smoke_density} 
                    units = "kg/m3"
                    />
                <SmokeRowResult number = '36' 
                    nameParameter = 'Объемный расход удаляемых продуктов горения' 
                    sign='Lsm'
                    parameter = {smokeParametersOutput.smoke_consumption_vol} 
                    units = "m3/h"
                    />

            </div>

    </Box>
    );
};

export default SmokeCoridorTable;