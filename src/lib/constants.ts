import Appearance from "@/components/settings/appearance";
import ExportAndData from "@/components/settings/exportAndData";
import Notifications from "@/components/settings/notifications";
import Preferences from "@/components/settings/preferences";
import Security from "@/components/settings/security";
import {
	Home,
	Clock,
	ListTodoIcon,
	Calendar,
	Folder,
	FileBarChart,
	ChartArea,
	Heart,
	Palette,
	FileText,
	Bell,
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
		url: "#",
		icon: Clock,
	},
	{
		title: "Tasks",
		url: "#",
		icon: ListTodoIcon,
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
	},
	{
		title: "Projects",
		url: "#",
		icon: Folder,
	},
	{
		title: "Reports",
		url: "#",
		icon: FileBarChart,
	},
	{
		title: "Analytics",
		url: "#",
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