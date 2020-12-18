//Update this file with the newer version each time one is done
// Call engine.setDebug() first to get console.log tracking. Only in DevMode.
// HOW TO CREATE ENDPOINT:
// 1.Function naming and arguments (see Player.get and Player.create as examples):
//-- if no parameter data is mandatory: methodObject(required, required, listener, optionalData)
//-- if parameter data is mandatory: methodObject(required, data, listener)
// 2.All Api call must first call setCall(data = data || {}, defaults, listener)
// 3. At the end, call:
// call("METHOD", "service/path" + urlParams, setParams(data, [get?bool]), listener)
// -- NOTE: setParams() has a second parameter that has to be true for get calls
// -- NOTE: All Api calls will have a middleware Listener for debugging in call.

// ENDPOINTS-------------------------:
//params: Is an object. Can be something like: {age: 30, name: "Javier", properties: {login: 1}, includes:["basic", "agent"]}
// Arr() can be Array or comma-separated

// hasFilter and hasExclude: if marked with this flag, you can send the following 
// additional params:
// {filter/exclude:{
// 	properties:{tag:"value"},
// 	category:"tag"
// }}


//Player
//create(id_in_app, params, listener)
//----- params = {email: string, name: string, properties: {tag: value}}
//get(id_in_app, listener, optionalParams)
//----- params = {includes = "basic,agent,advanced,quests,items" (Def: "basic,agent")}

//Items
//getAgentItems(listener, params)
//----- params = {owners:Arr(id_in_app), not_owned_by:Arr(id_in_app),random:int, sort:"from_last",page:int,per_page:int}
//----- hasFilters!
//get(tag, listener)
//all(listener, params)
//----- params = {properties:{tag:value},categories:Arr(tags),random:int, sort:"from_last",page:int,per_page:int}
//give(id_in_app, id_or_tag, listener, data)
//----- params = {properties:{tag:value},quantity:int(def 1)}
//giveMultiple(id_in_app, tags, listener, data){


//Engine
//complete(id_in_app, id_or_tag, listener, params)
//completeItem(agent_id, id_or_tag, listener, params)
//---- params: {
// [currency_tag]:qty, 
// [propety_tag]:value, 
// [mission_tag]:cooldown_value, 
// reward_tags:[Arr],
// scores:{scores:int, max_score:int}, 
// rewards:{[r_tag]:{agent:agent_id, agent_type:"STR"}}}
//intercept(id_in_app, tags, listener)
//----- tags: Arr(tags)

//Agent
//update(agent_obj, params, listener)
//----- params = {name:str, description:str,
//----- properties:{tag:value},
//----- currencies: {tag: {action: {value: int}}
//----- currencies: {tag: {action:{currency_tag: tag}}}
//----- NOTE: actions: set, add or remove
//topLeaderboard(currency_tag, listener, data)
//----- params = {id_in_app:toGetPosition,agent_type:str,page:int:1, per_page:int:15,
//----- hasFilters! and hasExcludes
//table_properties:(agent_id, agent_type, tag, data, listener)

//Deck
//update(tag, action, listener, data)
//------ TODO docs

//Trivia 
//all(listener, data){
//get(id, listener, data)
//answer(q_id, a_ids, listener)
//open_answer(q_id, answer,listener)

//Room
//all(listener)
//instances(room_id, listener, data) -- data: {by_state: "lobby|begin|end"}
//instance: (id, listener)
//by_code: (code, listener)
//join: (id, listener, data) -- data: {code: "room code"}



///------------------------- NO API ENDPOINTS

// Agents:
// value = getProp(agent, tag)
// [agent, item, category] = getSingleAgentItem(agent, category,tag)

import APIKey from "../../env"
import Loading from "../Loading"

export const config = {
	api_token: APIKey,
	test_api_token: "35446ca1c5968fb4d87345ef8bcca46e",
	base_url: 'https://engine2.playngage.io/api/',
	test_url: "http://localhost:3001/api/",
	cable_url: "wss://engine2.playngage.io/cable/",
	cable_url_test: "ws://127.0.0.1:3001/cable/",
	test: false,
	debug: false,
	expDays: 3,
	getToken: function () { return this.test ? this.test_api_token : this.api_token },
	getCableUrl: function () { return this.test ? this.cable_url_test : this.cable_url },
}

export const getCookie = (cookie) =>{var ca = document.cookie.split(';');for(var i = 0; i < ca.length; i++){var c = ca[i]; while (c.charAt(0) === ' ') {c = c.substring(1);}; if (c.indexOf(cookie+"=") === 0) {return c.split("=")[1];}}; return false;}
export const setCookie = (cookie, cvalue) => {let expDays = 3;let d = new Date();d.setTime(d.getTime() + (expDays * 24 * 60 * 60 * 1000));const expires = "expires="+d.toUTCString();document.cookie = cookie+"=" + cvalue + ";" + expires + ";path=/";}
export const deleteCookie = (cookie) =>{document.cookie = cookie+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"}
export const evaluateEmail = (method, service, url, listener) => { call(method, service,{},listener, url)}

const engine = {
	image: function (path) {
		if (this.test) {
			return path.replace("https://engine.playngage.io", "http://localhost:3001").replace("http://localhost:5001", "http://localhost:3001")
		} else { return path }
	},
	log: function (a) { if (config.debug) { console.log(a) } },
	setTest: function () { config.test = true },
	setDebug: function () { config.debug = true },
	logIn: function (cvalue) { let d = new Date(); d.setTime(d.getTime() + (config.expDays * 24 * 60 * 60 * 1000)); const expires = "expires=" + d.toUTCString(); document.cookie = "iia=" + cvalue + ";" + expires + ";path=/"; },
	getUser() { var ca = document.cookie.split(';'); for (var i = 0; i < ca.length; i++) { var c = ca[i]; while (c.charAt(0) === ' ') { c = c.substring(1); }; if (c.indexOf("iia=") === 0) { return c.split("=")[1]; } }; return false; },
	logOut: function () { document.cookie = "iia=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;" },

	// INIT INTERCEPT ENDPOINT CALLS
	complete: function (id_in_app, id_or_tag, listener, data) {
		setCall(data = data || {}, { id_in_app: id_in_app });
		call("POST", "missions/" + id_or_tag + "/complete", setParams(data), listener)
	},
	completeItem: function (agent_id, id_or_tag, listener, data) {
		setCall(data = data || {}, { agent_id: agent_id, agent_type: "AgentItem" });
		call("POST", "missions/" + id_or_tag + "/complete", setParams(data), listener)
	},
	intercept: function (id_in_app, tags, listener, data) {
		setCall(data = data || {}, { tags: tags, id_in_app: id_in_app });
		call("POST", "actions", setParams(data), listener)
	},
}

const setParams = function (data, get) {
	var formData = get ? {} : new FormData();
	engine.log("Params");
	engine.log(data);
	var checkNested = function (fD, key, value) {
		function ins(k, v) {
			get ? fD[k] = v : fD.append(k, v)
		}
		if (typeof value != "object") {
			ins(key, value)
		} else {
			if (Array.isArray(value)) {
				var v = value.join(","); ins(key, v)
			} else {
				for (var obj in value) {
					var k = key + "[" + obj + "]";
					checkNested(fD, k, value[obj]);
				}
			}
		}
	};
	for (var obj in data) {
		var key = obj;
		checkNested(formData, key, data[obj])
	};
	return formData;
}
const setCall = function (data, defaults) {
	if (data === undefined || data === null) {
		data = {}
	};
	defaults = defaults || {};
	for (var key in defaults) {
		data[key] = defaults[key]
	};
}

const call = function (method, service, formData, listener, url = config.test ? config.test_url : config.base_url) {
	var token = config.test ? config.test_api_token : config.api_token;
	//Set Headers
	var myHeaders = new Headers();
	myHeaders.append("Accept", "application/json");
	myHeaders.append("Authorization", "Token token=" + token);
	var miInit = { method: method, headers: myHeaders, mode: 'cors', cache: 'default' };
	//Include formData in body if post or put
	if (formData && (method === "POST" || method === "PUT" || method === "DELETE")) {
		formData.append("noEmpty", "true") //avoid multipart errors
		miInit.body = formData;
	}
	//Call
	function middlewareListener(data) {
		engine.log("Returned from " + service); engine.log(data);
		if (listener != null && listener !== undefined) { listener(data) } else { engine.log("No Listener") }
	}
	var built = new URL(url + service)
	if (method === "GET") { //You should have send true as second param in setParams(data, true)
		Object.keys(formData).forEach(key => built.searchParams.append(key, formData[key]))
	}
	engine.log(built)

	fetch(built, miInit)
		.then(response => response.json()).then(function (data) { middlewareListener(data) });
}



export const Players = {
	getAll: function (data,listener) { setCall(data = data || {}, { include: "basic,agent,items" }); call("GET", "players", setParams(data, true), listener)},
	create: function (id_in_app, data, listener) { setCall(data = data || {}, { id_in_app: id_in_app }); call("POST", "players/v2", setParams(data), listener) },
	get: function (id_in_app, listener, data) { setCall(data = data || {}, { include: "basic,agent,items,quests,teams" }); call("GET", "players/" + id_in_app, setParams(data, true), listener) },
	get_or_create: function (id_in_app, listener, data) {
		this.get(id_in_app, (d) => {
			if (d.status && d.status === "Invalid player: check id_in_app") { this.create(id_in_app, data, (cd) => { if (cd.player) this.get(id_in_app, (r) => listener(r = { ...r, d })) }) } else { listener(d) }
		}, data)
	},
	update: function (id_in_app, listener, data) {
		setCall(data = data || {});
		call("PUT", "players/" + id_in_app, setParams(data), listener)
	},
	get_tutorial: function (id_in_app, data, listener) {
		call("GET", "v2/players/" + id_in_app + "/tutorials", setParams(data, true), listener)
	},
	update_tutorial: function (id_in_app, id_or_tag, data, listener) {
		call("POST", "v2/players/" + id_in_app + "/tutorials/" + id_or_tag, setParams(data), listener)
	}
}

export const Items = {
		getAgentItems: function (listener, data) {
			setCall(data = data || {});
			call("GET", "agent_items", setParams(data, true), listener)
		},
		getOwnedAgentItems: function (agent, listener, data) {
			setCall(data = data || {}, { agent: agent.agent_id, agent_type: agent.agent_type });
			call("GET", "agent_items", setParams(data, true), listener)
		},
		get: function (tag, listener) {
			call("GET", "items/" + tag, {}, listener)
		},
		all: function (listener, data) {
			setCall(data = data || {});
			call("GET", "items", setParams(data, true), listener)
		},
		give: function (id_in_app, id_or_tag, listener, data) {
			setCall(data = data || {});
			call("POST", "items/" + id_or_tag + "/players/" + id_in_app + "/add", setParams(data), listener)
		},
		giveMultiple: function (id_in_app, tags, listener, data) {
			setCall(data = data || { items: tags });
			call("POST", "items/players/" + id_in_app + "/multiple", setParams(data), listener)
		},
	}
export const hora_server = {
		get: function () {
			let fecha = fetch('https://engine2.playngage.io/api/server_time', {
				method: 'GET',
				headers: {
					'Accept': "application/json",
					'Authorization': "Token token=" + APIKey
				}
			})
				.then(response => response.json())
				.then(fecha => fecha)
			return fecha
		}


	}

export const Agents = {
		update: function (agent, data, listener) {
			setCall(data = data || {}); call("PUT", "agents/" + agent.agent_id + "/agent_type/" + agent.agent_type, setParams(data), listener)
		},
		//in agent object include: updates: with all the options available in the api.
		multiple_update(agents, listener) {
			let data = { agents: {} }
			for (var i = agents.length - 1; i >= 0; i--) {
				let agent = agents[i]
				data.agents[agent.agent_id] = { ...agent.updates, agent_type: agent.agent_type }
			}
			call("PUT", "agents/multiple", setParams(data), listener)
		},
		topLeaderboard: function (currency_tag, listener, data) {
			setCall(data = data || {});
			call("GET", "agents/leaderboard/top/" + currency_tag, setParams(data, true), listener)
		},
		table_properties: function (agent, tag, data, listener) {
			setCall(data = data || {});
			call("GET", "agents/" + agent.agent_id + "/agent_type/" + agent.agent_type + "/table_properties/" + tag, setParams(data, true), listener)
		},
		send_trigger: function (agent, id_or_tag, listener, data) {
			setCall(data = data || {}, { agent_id: agent.agent_id, agent_type: agent.agent_type });
			call("POST", "missions/" + id_or_tag + "/complete", setParams(data), listener)
		},
		feedback: function (agent, tag, listener, data) {
			setCall(data = data || {}, { reward: tag });
			this.update(agent, data, listener)
		},

		//No endpoints
		getProp: (agent, tag) => agent.agent.properties[tag] ? agent.agent.properties[tag].value : null,
		getItemsByCategory: (agent, cat) => {
			if (!agent.items) return [false, "No items key"];
			const category = agent.items.items[cat]
			if (!category) return [false, "No category " + cat];
			return [category.items, true]
		},
		getSingleAgentItem: (agent, cat, tag) => {
			let [items, status] = this.getItemsByCategory(agent, cat)
			if (!items) return [items, status];
			const info = items[tag]
			if (!info) return [false, "No key with this tag: " + tag];
			const item = info.item
			const owned = info.owned[0]
			return [owned, item, items];
		},
	}

export const Deck = {
		update: function (tag, action, listener, data) {
			setCall(data = data || {}, { id_in_app: engine.getUser(), do: action })
			call("PUT", "agents/decks/" + tag, setParams(data), listener)
		},
	}

export const Rooms = {
		all: (listener) => { call("GET", "rooms", {}, listener) },
		instances: (room_id, listener, data) => { setCall(data = data || {}); call("GET", "rooms/" + room_id + "/instances", setParams(data, true), listener) },
		instance: (id, listener) => { call("GET", "rooms/instances/" + id, {}, listener) },
		by_code: (code, listener) => { call("GET", "rooms/instances/code/" + code, {}, listener) },
		update_state: (id, state, listener) => { call("PUT", "rooms/instances/" + id + "/" + state, {}, listener) },
		join: (id, listener, data) => {
			setCall(data = data || {}, { id_in_app: engine.getUser() })
			call("POST", "rooms/instances/" + id + "/join", setParams(data), (d) => {
				if (d.success === true) { setCookie("instance_" + id, "joined"); setCookie("current_instance", id) }
				if (d.status === "Already in the room") { setCookie("instance_" + id, "joined"); setCookie("current_instance", id) }
				listener(d);
			})
		},
		kick: (id, id_in_app, listener, data) => { setCall(data = data || {}, { id_in_app: id_in_app }); call("DELETE", "rooms/instances/" + id + "/kick", setParams(data), listener) },
		getOwnParticipant: (instance) => {
			let participant = { isSpectator: true };
			if (!engine.getUser()) return participant;
			for (let i = 0; i < instance.participants.length; i++) {
				if (instance.participants[i].owner.basic.id_in_app === engine.getUser()) participant = instance.participants[i];
			}
			return participant;
		},
	}
export const Teams = {
	create: () => { },
	update: () => { },
	getAll: (listener, data) => {
		setCall(data = data ||{})
		call("GET", "teams/", setParams(data, true), listener)
	},
	getTeam: (data, id_or_tag, listener) => {
		setCall(data = data ||{})
		call("GET", "teams/" + id_or_tag, setParams(data, true), listener)
	},
	delete: () => { },
	managePlayer: (agent, id_team, data, listener) => {
		setCall(data = data || { id_in_app: engine.getUser() });
		call("PUT", "teams/" + id_team + "/players/" + agent.id_in_app, setParams(data), listener)
	}
}
export const Trivia = {
		all: function (listener, data) {
			setCall(data = data || { id_in_app: engine.getUser() });
			call("GET", "trivia", setParams(data, true), listener)
		},
		get: function (id, listener, data) {
			setCall(data = data || { id_in_app: engine.getUser() });
			call("GET", "trivia/" + id, setParams(data, true), listener)
		},
		answer: function (q_id, a_ids, listener) {
			let data;
			setCall(data = {}, { answer_ids: a_ids });
			call("POST", "questions/" + q_id + "/players/" + engine.getUser(), setParams(data), listener)
		},
		open_answer: function (q_id, answer, listener) {
			let data = null;
			setCall(data = {}, { open_answer: answer });
			call("POST", "questions/" + q_id + "/players/" + engine.getUser(), setParams(data), listener)
		},
		getAnswers: function (trivia_id,id_in_app,listener) {
			call("GET", "trivia/"+trivia_id+"/players/"+id_in_app+"/answers",{}, listener)
		},
	}

//params:
//all: by_categories:true, page, per_page, filter:{categories: "a,a"}, exclude:{categories:"a,a"}
export const Immutables = {
	all: (listener, data) => {
		setCall(data = data || { id_in_app: engine.getUser() });
		call("GET", "immutable_objects", setParams(data, true), listener)
	},
	//
	byName: (arr, name) => { for (let i in arr) { if (arr[i].name === name) return arr[i] } }
}

export const Load = Loading;
	export default engine;

