import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import './styles/App.css';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';
import SmokeCalcService from './API/SmokeCalcService';
import SmokeRow from './components/UI/SmokeRow';
import SmokeRowResult from './components/UI/SmokeRowResult';
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '../node_modules/@mui/material/index';

import DrawerSmoke from './components/UI/DrawerSmoke';
import SmokeTable from './components/UI/SmokeTable';


function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort:'', query:''})
	const [modal, setModal] = useState(false);
	const [totalCount, setTotalCount] = useState(0);
	const [limit, setlimit] = useState(10);
	const [page, setPage] = useState(1);
	
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	
	const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
		const response = await PostService.getAll(limit, page);
		setPosts(response.data)
		// console.log(response.headers['x-total-count'])
		setTotalCount(response.headers['x-total-count'])
	}) 
	
	const local_devs = 3000
	const local_docker = 8080
	const port_backend = local_docker
	const baseURL = `http://localhost:${port_backend}/api/`


	const [smokeParametersInput, setSmokeParametersInput] = useState(
			{room_systemname: 'default_system_name',
			room_name: 'default_name123',
			room_level: 1,
			room_area_m2: 50,
			room_high_m: 3,
			room_fire_load_density: 800,
			room_calorific_value_fire_load: 14,
			room_temp_inside: 18,
			corridor_system_name: 'default_system_name',
			corridor_level: 1,
			corridor_hight: 3,
			corridor_door_hight: 2.0,
			corridor_door_width: 1.0,
			corridor_area: 30.0,
			corridor_lenght: 15,
			coef_building_type: 1.2,
			corridor_temp: 18
			}
		)

	const [smokeParametersOutput, setSmokeParametersOutput] = useState(
			{ 
			room_volume_m3 : 0,
			Fw : 0,
			A0 :0,
			CALORIFIC_VALUE_WOOD : 13.8,
			Fw_unit_fire_load_by_walling : 0,
			v0_air_for_burn : 0,
			room_opening_rate : 0,
			unit_fire_load_critical : 0,
			unit_fire_load_by_floor_square : 0,
			fire_type : '',
			room_temp_inside_K : 0,
			max_temp : 0,
			temp_smoke_coridor : 0,
			corridor_smoke_hight_limit : 0,
			corridor_temp_K : 0,
			corridor_smoke_temp : 0,
			corridor_door_area : 0,
			smoke_consumption_mass : 0,
			smoke_density : 0,
			smoke_consumption_vol : 0
		})

	function smokeCalcOutput(input){
		const smokePromise = SmokeCalcService.getSmokeCalc(input)
			.then(({ data }) => data)
			.then(data => {setSmokeParametersOutput((prev) => ({...prev, 
																room_volume_m3 : data.room_volume_m3,
																Fw : data.Fw,
																A0 : data.A0,
																CALORIFIC_VALUE_WOOD : data.CALORIFIC_VALUE_WOOD,
																Fw_unit_fire_load_by_walling : data.Fw_unit_fire_load_by_walling,
																v0_air_for_burn : data.v0_air_for_burn,
																room_opening_rate : data.room_opening_rate,
																unit_fire_load_critical : data.unit_fire_load_critical,
																unit_fire_load_by_floor_square : data.unit_fire_load_by_floor_square,
																fire_type : data.fire_type,
																room_temp_inside_K : data.room_temp_inside_K,
																max_temp : data.max_temp,
																temp_smoke_coridor : data.temp_smoke_coridor,
																corridor_smoke_hight_limit : data.corridor_smoke_hight_limit,
																corridor_temp_K : data.corridor_temp_K,
																corridor_smoke_temp : data.corridor_smoke_temp,
																corridor_door_area : data.corridor_door_area,
																smoke_consumption_mass : data.smoke_consumption_mass,
																smoke_density : data.smoke_density,
																smoke_consumption_vol : data.smoke_consumption_vol
																})
													)
							}
				);
	}

	useEffect( () => {
		smokeCalcOutput(smokeParametersInput);
			
		}, [])
	

	const createPost = (newPost) => { 
		setPosts([...posts, newPost])
		setModal(false)
	}
	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	// async function fetchPosts() {
	// 	setIsPostsLoading(true);
	// 	setTimeout ( async () => {
	// 		const posts = await PostService.getAll();
	// 		setPosts(posts)
	// 		setIsPostsLoading(false);
	// 	}, 1000)
	// }

	useMemo(() => smokeCalcOutput(smokeParametersInput), 
		[
			// smokeParametersInput.room_systemname,
			// smokeParametersInput.room_name,
			smokeParametersInput.room_level,
			smokeParametersInput.room_area_m2,
			smokeParametersInput.room_high_m,
			smokeParametersInput.room_fire_load_density,
			smokeParametersInput.room_calorific_value_fire_load,
			smokeParametersInput.room_temp_inside,
			// smokeParametersInput.corridor_system_name,
			smokeParametersInput.corridor_level,
			smokeParametersInput.corridor_hight,
			smokeParametersInput.corridor_door_hight,
			smokeParametersInput.corridor_door_width,
			smokeParametersInput.corridor_area,
			smokeParametersInput.corridor_lenght,
			smokeParametersInput.coef_building_type,
			smokeParametersInput.corridor_temp
		]);


	const handleChangeInput = (nameParameter, newParameter) => {
		const newResult = ({...smokeParametersInput})
		newResult[nameParameter] = newParameter
		setSmokeParametersInput(newResult)

	  }

	const drawerWidth = 280;
	


	return (
		<div className='App'>

			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
				>
					<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Расчет противодымной вентиляции 
					</Typography>
					</Toolbar>
				</AppBar>


				<DrawerSmoke/>


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
			</Box>


			{/* <MyButton onClick={fetchPosts} > get posts </MyButton>
			<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
			Создать пользователя
			</MyButton>
			<MyModal visible={modal} setVisible={setModal}> 
			<PostForm create={createPost}/> 
			</MyModal>
			<hr style={{margin:'15px 0'}}/>
			<PostFilter
				filter={filter}	
				setFilter={setFilter}	
			/>
			{postError && <h1> Произошла ошибка ${postError}</h1>}
			{isPostsLoading
			? <div style={{display:'flex', justifyContent: 'center', marginTop:50}}> <Loader/> </div>
			: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Список постов"}/>
			} */}
			
		</div>
	);
}
export default App;





