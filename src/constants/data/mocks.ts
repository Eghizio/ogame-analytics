import { User } from "_types/auth";
import { ProfileData } from "_types/data";


export const mockedUser: User = {
	email: "test@test.com",
	password: "test",
	nickname: "Eghizio",
	lastServerID: "179",
	activeServers: ["178", "179", "180"]
};

export const mockedProfiles: ProfileData[] = [
	{
		serverID: "180",
		serverName: "Belinda",
		userID: "21371",
		userName: "Eghizio"
	},
	{
		serverID: "179",
		serverName: "Atlas",
		userID: "21372",
		userName: "Eghizio"
	},
	{
		serverID: "178",
		serverName: "Zenith",
		userID: "21373",
		userName: "Eghizio"
	},
	{
		serverID: "177",
		serverName: "Ymir",
		userID: "21374",
		userName: "Eghizio"
	},
	{
		serverID: "176",
		serverName: "Xanthippe",
		userID: "21375",
		userName: "Eghizio"
	},
	{
		serverID: "175",
		serverName: "Weywot",
		userID: "21376",
		userName: "Eghizio"
	},
	{
		serverID: "174",
		serverName: "Volans",
		userID: "21377",
		userName: "Eghizio"
	},
];