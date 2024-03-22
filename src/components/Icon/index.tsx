import { useMemo } from 'react';

import dynamic from 'next/dynamic';

const EmailIcon = dynamic(() => import('./icons/Email'));
const LockIcon = dynamic(() => import('./icons/Lock'));
const AccountIcon = dynamic(() => import('./icons/Account'));
const CalendarIcon = dynamic(() => import('./icons/Calendar'));
const AlertCircleIcon = dynamic(() => import('./icons/AlertCircle'));
const MenuIcon = dynamic(() => import('./icons/Menu'));
const PowerIcon = dynamic(() => import('./icons/Power'));
const TrophyIcon = dynamic(() => import('./icons/Trophy'));
const Trophy2Icon = dynamic(() => import('./icons/Trophy2'));
const Trophy3Icon = dynamic(() => import('./icons/Trophy3'));
const FlagIcon = dynamic(() => import('./icons/Flag'));
const HomeIcon = dynamic(() => import('./icons/Home'));
const InformationIcon = dynamic(() => import('./icons/Information'));
const MarkerIcon = dynamic(() => import('./icons/Marker'));
const CogIcon = dynamic(() => import('./icons/Cog'));
const ReaderIcon = dynamic(() => import('./icons/Reader'));
const ChevronDownIcon = dynamic(() => import('./icons/ChevronDown'));
const UserIcon = dynamic(() => import('./icons/User'));
const WalkIcon = dynamic(() => import('./icons/Walk'));
const AwardIcon = dynamic(() => import('./icons/Award'));
const ClockIcon = dynamic(() => import('./icons/Clock'));
const PowerLevelIcon = dynamic(() => import('./icons/PowerLevel'));
const DistanceIcon = dynamic(() => import('./icons/Distance'));
const PinIcon = dynamic(() => import('./icons/Pin'));
const SquarePinIcon = dynamic(() => import('./icons/SquarePin'));
const ChevronLeftIcon = dynamic(() => import('./icons/ChevronLeft'));
const MapIcon = dynamic(() => import('./icons/Map'));
const CrosshairIcon = dynamic(() => import('./icons/Crosshair'));
const CloseIcon = dynamic(() => import('./icons/Close'));
const ErrorIcon = dynamic(() => import('./icons/Error'));
const SuccessIcon = dynamic(() => import('./icons/Success'));
const DownloadIcon = dynamic(() => import('./icons/Download'));

const Icons = {
  email: EmailIcon,
  lock: LockIcon,
  account: AccountIcon,
  calendar: CalendarIcon,
  alertCircle: AlertCircleIcon,
  menu: MenuIcon,
  power: PowerIcon,
  success: SuccessIcon,
  download: DownloadIcon,
  error: ErrorIcon,
  close: CloseIcon,
  trophy: TrophyIcon,
  trophy2: Trophy2Icon,
  trophy3: Trophy3Icon,
  marker: MarkerIcon,
  flag: FlagIcon,
  information: InformationIcon,
  home: HomeIcon,
  cog: CogIcon,
  reader: ReaderIcon,
  chevronDown: ChevronDownIcon,
  chevronLeft: ChevronLeftIcon,
  user: UserIcon,
  award: AwardIcon,
  walk: WalkIcon,
  distance: DistanceIcon,
  clock: ClockIcon,
  powerLevel: PowerLevelIcon,
  pin: PinIcon,
  squarePin: SquarePinIcon,
  map: MapIcon,
  crosshair: CrosshairIcon,
} as const;

export type IconsNames = keyof typeof Icons;

type IconProps = {
  name: IconsNames;
  className?: string;
};

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const NewIcon = useMemo(() => Icons[name], [name]);

  return <NewIcon className={`${className || 'fill-current'}`} />;
};

export default Icon;
