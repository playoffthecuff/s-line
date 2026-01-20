import { AirplaneIcon } from "@/components/ui/icons/airplane";
import { CheckIcon } from "@/components/ui/icons/check";
import { ChevronDownIcon } from "@/components/ui/icons/chevron-down";
import { ChevronUpIcon } from "@/components/ui/icons/chevron-up";
import { ChevronUpDownIcon } from "@/components/ui/icons/chevron-up-down";
import { CopyIcon } from "@/components/ui/icons/copy";
import { DisketteIcon } from "@/components/ui/icons/diskette";
import { DislikeIcon } from "@/components/ui/icons/dislike";
import { ErrorIcon } from "@/components/ui/icons/error";
import { EyeIcon } from "@/components/ui/icons/eye";
import { EyeCloseIcon } from "@/components/ui/icons/eye-close";
import { EyeOffIcon } from "@/components/ui/icons/eye-off";
import { EyeOpenIcon } from "@/components/ui/icons/eye-open";
import { GearwheelIcon } from "@/components/ui/icons/gearwheel";
import { HashIcon } from "@/components/ui/icons/hash";
import { HeartIcon } from "@/components/ui/icons/heart";
import { HelpIcon } from "@/components/ui/icons/help";
import { InfoIcon } from "@/components/ui/icons/info";
import { LikeIcon } from "@/components/ui/icons/like";
import { MinusIcon } from "@/components/ui/icons/minus";
import { MoonIcon } from "@/components/ui/icons/moon";
import { PencilIcon } from "@/components/ui/icons/pencil";
import { PencilOffIcon } from "@/components/ui/icons/pencil-off";
import { PlusIcon } from "@/components/ui/icons/plus";
import { SignInIcon } from "@/components/ui/icons/sign-in";
import { SmartphoneIcon } from "@/components/ui/icons/smartphone";
import { SparkleIcon } from "@/components/ui/icons/sparkle";
import { SuccessIcon } from "@/components/ui/icons/success";
import { SunIcon } from "@/components/ui/icons/sun";
import { TextIcon } from "@/components/ui/icons/text";
import { TriangleDownRoundedIcon } from "@/components/ui/icons/triangle-down-rounded";
import { TriangleDownSharpIcon } from "@/components/ui/icons/triangle-down-sharp";
import { TriangleUpRoundedIcon } from "@/components/ui/icons/triangle-up-rounded";
import { TriangleUpSharpIcon } from "@/components/ui/icons/triangle-up-sharp";
import { WarningIcon } from "@/components/ui/icons/warning";
import { XIcon } from "@/components/ui/icons/x";
import { Title } from "@/components/ui/typography/title";
import { IconWrapper } from "./item";

const INSTALL_STR = "bunx @playoffthecuff/smoothed@latest add";
const DESCRIPTION = "Copy installation command:";

const items = [
	{ registryName: "airplane-icon", Component: AirplaneIcon, title: "Airplane" },
	{ registryName: "check-icon", Component: CheckIcon, title: "Check" },
	{
		registryName: "chevron-down-icon",
		Component: ChevronDownIcon,
		title: "Check Down",
	},
	{
		registryName: "chevron-up-down-icon",
		Component: ChevronUpDownIcon,
		title: "Check Up Down",
	},
	{
		registryName: "chevron-up-icon",
		Component: ChevronUpIcon,
		title: "Chevron Up",
	},
	{ registryName: "copy-icon", Component: CopyIcon, title: "Copy" },
	{ registryName: "diskette-icon", Component: DisketteIcon, title: "Diskette" },
	{ registryName: "dislike-icon", Component: DislikeIcon, title: "Dislike" },
	{ registryName: "error-icon", Component: ErrorIcon, title: "Error" },
	{
		registryName: "eye-close-icon",
		Component: EyeCloseIcon,
		title: "Eye Close",
	},
	{ registryName: "eye-off-icon", Component: EyeOffIcon, title: "Eye Off" },
	{ registryName: "eye-open-icon", Component: EyeOpenIcon, title: "Eye Open" },
	{ registryName: "eye-icon", Component: EyeIcon, title: "Eye" },
	{
		registryName: "gearwheel-icon",
		Component: GearwheelIcon,
		title: "Gearwheel",
	},
	{ registryName: "heart-icon", Component: HeartIcon, title: "Heart" },
	{ registryName: "hash-icon", Component: HashIcon, title: "Hash" },
	{ registryName: "help-icon", Component: HelpIcon, title: "Help" },
	{ registryName: "info-icon", Component: InfoIcon, title: "Info" },
	{ registryName: "like-icon", Component: LikeIcon, title: "Like" },
	{ registryName: "minus-icon", Component: MinusIcon, title: "Minus" },
	{ registryName: "moon-icon", Component: MoonIcon, title: "Moon" },
	{ registryName: "pencil-icon", Component: PencilIcon, title: "Pencil" },
	{
		registryName: "pencil-off-icon",
		Component: PencilOffIcon,
		title: "Pencil-off",
	},
	{ registryName: "plus-icon", Component: PlusIcon, title: "Plus" },
	{ registryName: "signin-icon", Component: SignInIcon, title: "Sign In" },
	{
		registryName: "smartphone",
		Component: SmartphoneIcon,
		title: "Smartphone",
	},
	{ registryName: "sparkle-icon", Component: SparkleIcon, title: "Sparkle" },
	{ registryName: "success-icon", Component: SuccessIcon, title: "Success" },
	{ registryName: "sun-icon", Component: SunIcon, title: "Sun" },
	{
		registryName: "text-icon",
		Component: TextIcon,
		title: "Text",
	},
	{
		registryName: "triangle-down-rounded-icon",
		Component: TriangleDownRoundedIcon,
		title: "Triangle Down Rounded",
	},
	{
		registryName: "triangle-down-sharp-icon",
		Component: TriangleDownSharpIcon,
		title: "Triangle Down Sharp",
	},
	{
		registryName: "triangle-up-rounded-icon",
		Component: TriangleUpRoundedIcon,
		title: "Triangle Up Rounded",
	},
	{
		registryName: "triangle-up-sharp-icon",
		Component: TriangleUpSharpIcon,
		title: "Triangle Up Sharp",
	},
	{ registryName: "warning", Component: WarningIcon, title: "Warning" },
	{ registryName: "x", Component: XIcon, title: "X" },
];

export default function IconsPage() {
	return (
		<div
			className="max-w-200 min-h-full bg-1 mx-auto p-18d flex flex-col gap-16d grow [&&]-pb-20"
			style={{
				width: "clamp(320px, 100%, 800px)",
			}}
		>
			<div>
				<Title>Icons</Title>
				<p>Components returning SVG markup</p>
			</div>
			<Title size={5}>Variants:</Title>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(3rem,1fr))] items-center gap-16d">
				{items.map(({ Component, registryName, title }, i) => (
					<IconWrapper
						code={`${INSTALL_STR} ${registryName}`}
						title={title}
						description={DESCRIPTION}
						key={i}
					>
						{
							<Component className="bg-3 rounded-9d p-[25%] w-full aspect-square cursor-pointer hover:bg-2 transition-colors h-auto" />
						}
					</IconWrapper>
				))}
			</div>
		</div>
	);
}
