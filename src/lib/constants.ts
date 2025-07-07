import Appearance from "@/components/settings/appearance";
import ExportAndData from "@/components/settings/exportAndData";
import Notifications from "../../coverage/notifications";
import Preferences from "../../coverage/preferences";
import Security from "@/components/settings/security";
import {
	Bell,
	Calendar,
	ChartArea,
	Clock,
	FileBarChart,
	FileText,
	Folder,
	Heart,
	Home,
	ListTodoIcon,
	Palette,
	ShieldCheck,
} from "lucide-react";

export const CORE_ITEMS = [
	{
		title: "Home",
		url: "/",
		icon: Home,
	},
	{
		title: "Time tracking",
		url: "/time-tracking",
		icon: Clock,
	},
	{
		title: "Tasks",
		url: "/tasks",
		icon: ListTodoIcon,
	},
	{
		title: "Calendar",
		url: "/calendar",
		icon: Calendar,
	},
	{
		title: "Projects",
		url: "/projects",
		icon: Folder,
	},
	{
		title: "Reports",
		url: "/reports",
		icon: FileBarChart,
	},
	{
		title: "Analytics",
		url: "/analytics",
		icon: ChartArea,
	},
] as const;

export const SETTINGS_OPTIONS = {
	nav: [
		{ name: "Preferences", icon: Heart, element: Preferences },
		{ name: "Appearance and theme", icon: Palette, element: Appearance },
		{ name: "Export & Data", icon: FileText, element: ExportAndData },
		{ name: "Notifications", icon: Bell, element: Notifications },
		{ name: "Security", icon: ShieldCheck, element: Security },
	],
} as const;

export const VALID_SYMBOLS = `~!@#$%^&*()_\\-+={[]}|:;"'<,>.?/` as const;
export const ESCAPED_SYMBOLS =
	`~!@#\\$%\\^&\\*\\(\\)_\\\\\\-\\+=\\{\\[\\]\\}\\|:;"'<,>\\.\\?/` as const;
