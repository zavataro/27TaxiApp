import Default from "../Pages/Dashboard/Default";
/*import ECommerce from "../Pages/Dashboard/ECommerce";
import AceCodeEditor from "../Pages/Miscellaneous/Editor/AceCodeEditor";
import QuillEditor from "../Pages/Miscellaneous/Editor/QuillEditor";
import GoogleMaps from "../Pages/Miscellaneous/Maps/GoogleMaps";
import LeafletMaps from "../Pages/Miscellaneous/Maps/LeafletMaps";
import SupportTicket from "../Pages/Miscellaneous/SupportTicket";
import ApplyJobs from "../Pages/Miscellaneous/JobSearch/ApplyJobs";
import CardsView from "../Pages/Miscellaneous/JobSearch/CardsView";
import JobDetails from "../Pages/Miscellaneous/JobSearch/JobDetails";
import ListView from "../Pages/Miscellaneous/JobSearch/ListView";
import DetailedCourse from "../Pages/Miscellaneous/Learning/DetailedCourse";
import LearningList from "../Pages/Miscellaneous/Learning/LearningList";
import AddPost from "../Pages/Miscellaneous/Blog/AddPost";
import BlogDetails from "../Pages/Miscellaneous/Blog/BlogDetails";
import BlogSingle from "../Pages/Miscellaneous/Blog/BlogSingle";
import Faq from "../Pages/Miscellaneous/FAQ";
import ImageHoverEffects from "../Pages/Miscellaneous/Gallery/ImageHoverEffects";
import MasonryGalleryDescription from "../Pages/Miscellaneous/Gallery/MasonryGalleryDescription";
import Knowledgebase from "../Pages/Miscellaneous/Knowledgebase";
import GalleryDescription from "../Pages/Miscellaneous/Gallery/GalleryDescription";
import GalleryGrid from "../Pages/Miscellaneous/Gallery/GalleryGrid";
import MasonryGallery from "../Pages/Miscellaneous/Gallery/MasonryGallery";
import SamplePage from "../Pages/Pages/SamplePage";
import API from "../Pages/Tables/DataTables/API";
import AdvanceInit from "../Pages/Tables/DataTables/AdvanceInit";
import BasicInit from "../Pages/Tables/DataTables/BasicInit";
import DataSource from "../Pages/Tables/DataTables/DataSource";
import TableComponents from "../Pages/Tables/ReactstrapTables/TableComponents";
import FormWizard2 from "../Pages/Forms/FormLayout/FormWizard2";
import TwoFactor from "../Pages/Forms/FormLayout/TwoFactor";
import BasicTables from "../Pages/Tables/ReactstrapTables/BasicTables";
import FormWizard1 from "../Pages/Forms/FormLayout/FormWizard1";
import Clipboard from "../Pages/Forms/FormWidgets/Clipboard";
import DatePicker from "../Pages/Forms/FormWidgets/Datepicker";
import Switch from "../Pages/Forms/FormWidgets/Switch";
import Touchspin from "../Pages/Forms/FormWidgets/Touchspin";
import Typeahead from "../Pages/Forms/FormWidgets/Typeahead";
import InputGroups from "../Pages/Forms/FormControls/InputGroups";
import InputMask from "../Pages/Forms/FormControls/InputMask";
import MegaOptions from "../Pages/Forms/FormControls/MegaOptions";
import BaseInputs from "../Pages/Forms/FormControls/BaseInputs";
import CheckboxAndRadio from "../Pages/Forms/FormControls/CheckboxAndRadio";
import ApexChart from "../Pages/Charts/ApexChart";
import ChartJsChart from "../Pages/Charts/ChartJsChart";
import GoogleChart from "../Pages/Charts/GoogleChart";
import FormValidation from "../Pages/Forms/FormControls/FormValidation";
import DefaultStyle from "../Pages/Buttons/DefaultStyle";
import FeatherIcons from "../Pages/Icons/FeatherIcons";
import IcoIcon from "../Pages/Icons/IcoIcon";
import ThemifyIcon from "../Pages/Icons/ThemifyIcon";
import WhetherIcon from "../Pages/Icons/WhetherIcon";
import CreativeCard from "../Pages/BonusUi/CreativeCard";
import Timeline from "../Pages/BonusUi/Timeline";
import FlagIcons from "../Pages/Icons/FlagIcons";
import FontAwesomeIcon from "../Pages/Icons/FontAwesomeIcon";
import BasicCard from "../Pages/BonusUi/BasicCard";
import Breadcrumb from "../Pages/BonusUi/Breadcrumb";
import ImageCropper from "../Pages/BonusUi/ImageCropper";
import RangeSlider from "../Pages/BonusUi/RangeSlider";
import Carousel from "../Pages/BonusUi/Carousel";
import Pagination from "../Pages/BonusUi/Pagination";
import Ribbons from "../Pages/BonusUi/Ribbons";
import Dropzone from "../Pages/BonusUi/Dropzone";
import Rating from "../Pages/BonusUi/Rating";
import SweetAlert from "../Pages/BonusUi/SweetAlert";
import Tour from "../Pages/BonusUi/Tour";
import Scrollable from "../Pages/BonusUi/Scrollable";
import Toasts from "../Pages/BonusUi/Toasts";
import TreeView from "../Pages/BonusUi/TreeView";
import Lists from "../Pages/UiKits/Lists";
import Tabs from "../Pages/UiKits/Tabs";
import Accordion from "../Pages/UiKits/Accordion";
import Dropdown from "../Pages/UiKits/Dropdown";
import Alert from "../Pages/UiKits/Alert";
import Popover from "../Pages/UiKits/Popover";
import Tooltip from "../Pages/UiKits/Tooltip";
import Typography from "../Pages/UiKits/Typography";
import Project from "../Pages/Dashboard/Project";
import General from "../Pages/Widgets/General";
import Avatars from "../Pages/UiKits/Avatars";
import HelperClasses from "../Pages/UiKits/HelperClasses";
import Modal from "../Pages/UiKits/Modal";
import Grid from "../Pages/UiKits/Grid";
import Progress from "../Pages/UiKits/Progress";
import TagAndPills from "../Pages/UiKits/Tag&Pills";
import SearchResult from "../Pages/Applications/SearchResult";
import Calendar from "../Pages/Applications/Calendar";
import SocialApp from "../Pages/Applications/SocialApp";
import Contacts from "../Pages/Applications/Contacts";
import Tasks from "../Pages/Applications/Tasks";
import EditProfile from "../Pages/Applications/Users/UsersEdit";
import UserCards from "../Pages/Applications/Users/UserCards";
import Bookmarks from "../Pages/Applications/Bookmarks";
import ToDo from "../Pages/Applications/ToDo";
import PrivateChat from "../Pages/Applications/Chat/PrivateChat";
import GroupChat from "../Pages/Applications/Chat/GroupChat";
import UserProfile from "../Pages/Applications/Users/UserProfile";
import Invoice5 from "../Pages/Applications/ECommerce/Invoices/Invoice5";
import Invoice6 from "../Pages/Applications/ECommerce/Invoices/Invoice6";
import LetterBox from "../Pages/Applications/LetterBox";
import Wishlist from "../Pages/Applications/ECommerce/Wishlist";
import Checkout from "../Pages/Applications/ECommerce/Checkout";
import Pricing from "../Pages/Applications/ECommerce/Pricing";
import Invoice1 from "../Pages/Applications/ECommerce/Invoices/Invoice1";
import Invoice2 from "../Pages/Applications/ECommerce/Invoices/Invoice2";
import Invoice3 from "../Pages/Applications/ECommerce/Invoices/Invoice3";
import Invoice4 from "../Pages/Applications/ECommerce/Invoices/Invoice4";
import CategoryPage from "../Pages/Applications/ECommerce/CategoryPage";
import ProductList from "../Pages/Applications/ECommerce/ProductList";
import ProductPage from "../Pages/Applications/ECommerce/ProductPage";
import PaymentDetails from "../Pages/Applications/ECommerce/PaymentDetails";
import OrderHistory from "../Pages/Applications/ECommerce/OrderHistory";
import Cart from "../Pages/Applications/ECommerce/Cart";
import AddProduct from "../Pages/Applications/ECommerce/AddProduct";
import Product from "../Pages/Applications/ECommerce/Product";
import Chart from "../Pages/Widgets/Chart";
import ProjectList from "../Pages/Applications/Project/ProjectList";
import ProjectCreate from "../Pages/Applications/Project/ProjectCreate";
import FileManager from "../Pages/Applications/FileManager";
*/
console.log(import.meta.env.PUBLIC_URL);

export const routes = [
  /*{ path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/typography`, element: <Typography /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/avatars`, element: <Avatars /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/helper_classes`, element: <HelperClasses /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/grid`, element: <Grid /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/tag_pills`, element: <TagAndPills /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/progress_bar`, element: <Progress /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/alert`, element: <Alert /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/popover`, element: <Popover /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/tooltip`, element: <Tooltip /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/modal`, element: <Modal /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/dropdown`, element: <Dropdown /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/accordion`, element: <Accordion /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/tabs`, element: <Tabs /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/lists`, element: <Lists /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/scrollable`, element: <Scrollable /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/tree`, element: <TreeView /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/toasts`, element: <Toasts /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/rating`, element: <Rating /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/dropzone`, element: <Dropzone /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/tour`, element: <Tour /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/sweet_alert_2`, element: <SweetAlert /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/add_products`, element: <AddProduct /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/product`, element: <Product /> },
  { path: `${import.meta.env.PUBLIC_URL}/widgets/chart_widget`, element: <Chart /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/project/project_list`, element: <ProjectList /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/project/create_project`, element: <ProjectCreate /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/file_manager`, element: <FileManager /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/carousel`, element: <Carousel /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/ribbons`, element: <Ribbons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/pagination`, element: <Pagination /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/breadcrumb`, element: <Breadcrumb /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/range_slider`, element: <RangeSlider /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/image_cropper`, element: <ImageCropper /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/basic_card`, element: <BasicCard /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/themify_icon`, element: <ThemifyIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/ico_icon`, element: <IcoIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/feather_icon`, element: <FeatherIcons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/whether_icon`, element: <WhetherIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/buttons`, element: <DefaultStyle /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/creative_card`, element: <CreativeCard /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/timeline`, element: <Timeline /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/flag_icon`, element: <FlagIcons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/font_awesome`, element: <FontAwesomeIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/category_page`, element: <CategoryPage /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/product_list`, element: <ProductList /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/product_page`, element: <ProductPage /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/payment_details`, element: <PaymentDetails /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/order_history`, element: <OrderHistory /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/cart`, element: <Cart /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/add_products`, element: <AddProduct /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/product`, element: <Product /> },
  { path: `${import.meta.env.PUBLIC_URL}/widgets/chart_widget`, element: <Chart /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/project/project_list`, element: <ProjectList /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/project/create_project`, element: <ProjectCreate /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/file_manager`, element: <FileManager /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/ribbons`, element: <Ribbons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/pagination`, element: <Pagination /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/breadcrumb`, element: <Breadcrumb /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/range_slider`, element: <RangeSlider /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/image_cropper`, element: <ImageCropper /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/basic_card`, element: <BasicCard /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/themify_icon`, element: <ThemifyIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/ico_icon`, element: <IcoIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/feather_icon`, element: <FeatherIcons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/whether_icon`, element: <WhetherIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/buttons`, element: <DefaultStyle /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/creative_card`, element: <CreativeCard /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/bonus_ui/timeline`, element: <Timeline /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/flag_icon`, element: <FlagIcons /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/icons/font_awesome`, element: <FontAwesomeIcon /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/charts/chart_apex`, element: <ApexChart /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/charts/chart_google`, element: <GoogleChart /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/charts/chartjs`, element: <ChartJsChart /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/form_validation`, element: <FormValidation /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/base_input`, element: <BaseInputs /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`, element: <CheckboxAndRadio /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`, element: <FormWizard2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/two_factor`, element: <TwoFactor /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`, element: <BasicTables /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/clipboard`, element: <Clipboard /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_1`, element: <FormWizard1 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/datepicker`, element: <DatePicker /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/touchspin`, element: <Touchspin /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/switch`, element: <Switch /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/typeahead`, element: <Typeahead /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_group`, element: <InputGroups /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_mask`, element: <InputMask /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/mega_options`, element: <MegaOptions /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/contacts`, element: <Contacts /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/task`, element: <Tasks /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/users/edit_profile`, element: <EditProfile /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/users/user_cards`, element: <UserCards /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/bookmark`, element: <Bookmarks /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/to_do`, element: <ToDo /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_group`, element: <InputGroups /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_mask`, element: <InputMask /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/mega_options`, element: <MegaOptions /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/search`, element: <SearchResult /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/table_components`, element: <TableComponents /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/basic_init`, element: <BasicInit /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/advance_init`, element: <AdvanceInit /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/api`, element: <API /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/data_sources`, element: <DataSource /> },
  { path: `${import.meta.env.PUBLIC_URL}/pages/sample_page`, element: <SamplePage /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery`, element: <GalleryGrid /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery_description`, element: <GalleryDescription /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery`, element: <MasonryGallery /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/calendar_basic`, element: <Calendar /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/social_app`, element: <SocialApp /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_mask`, element: <InputMask /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/mega_options`, element: <MegaOptions /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`, element: <CheckboxAndRadio /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`, element: <FormWizard2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/two_factor`, element: <TwoFactor /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`, element: <BasicTables /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/clipboard`, element: <Clipboard /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_1`, element: <FormWizard1 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/datepicker`, element: <DatePicker /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/touchspin`, element: <Touchspin /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/switch`, element: <Switch /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/typeahead`, element: <Typeahead /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_group`, element: <InputGroups /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_mask`, element: <InputMask /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/mega_options`, element: <MegaOptions /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`, element: <CheckboxAndRadio /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/chat/chat_private`, element: <PrivateChat /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/chat/chat_group`, element: <GroupChat /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/users/user_profile`, element: <UserProfile /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`, element: <FormWizard2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/two_factor`, element: <TwoFactor /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`, element: <BasicTables /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`, element: <CheckboxAndRadio /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_5`, element: <Invoice5 /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_6`, element: <Invoice6 /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/email/letter_box`, element: <LetterBox /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/radio_checkbox_control`, element: <CheckboxAndRadio /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`, element: <FormWizard2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/two_factor`, element: <TwoFactor /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`, element: <BasicTables /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/wishlist`, element: <Wishlist /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/checkout`, element: <Checkout /> },
  { path: `${import.meta.env.PUBLIC_URL}/applications/ecommerce/pricing`, element: <Pricing /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_1`, element: <Invoice1 /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_2`, element: <Invoice2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_3`, element: <Invoice3 /> },
  { path: `${import.meta.env.PUBLIC_URL}/invoice/invoice_4`, element: <Invoice4 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_2`, element: <FormWizard2 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/two_factor`, element: <TwoFactor /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/basic_table`, element: <BasicTables /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/clipboard`, element: <Clipboard /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_layout/form_wizard_1`, element: <FormWizard1 /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/datepicker`, element: <DatePicker /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/touchspin`, element: <Touchspin /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/switch`, element: <Switch /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_widgets/typeahead`, element: <Typeahead /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_group`, element: <InputGroups /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/input_mask`, element: <InputMask /> },
  { path: `${import.meta.env.PUBLIC_URL}/forms/form_controls/mega_options`, element: <MegaOptions /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/reactstrap_tables/table_components`, element: <TableComponents /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/basic_init`, element: <BasicInit /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/advance_init`, element: <AdvanceInit /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/api`, element: <API /> },
  { path: `${import.meta.env.PUBLIC_URL}/table/data_tables/data_sources`, element: <DataSource /> },
  { path: `${import.meta.env.PUBLIC_URL}/pages/sample_page`, element: <SamplePage /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery`, element: <GalleryGrid /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery_description`, element: <GalleryDescription /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery`, element: <MasonryGallery /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/maps/google_map`, element: <GoogleMaps /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/maps/leaflet_map`, element: <LeafletMaps /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/editors/ace_code_editor`, element: <AceCodeEditor /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/editors/quill_editor`, element: <QuillEditor /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/support_ticket`, element: <SupportTicket /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/job_search/job_cards_view`, element: <CardsView /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/job_search/job_list_view`, element: <ListView /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/job_search/job_details`, element: <JobDetails /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/job_search/job_apply`, element: <ApplyJobs /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/learning/learning_list_view`, element: <LearningList /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/learning/course_details`, element: <DetailedCourse /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery_description`, element: <MasonryGalleryDescription /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/gallery_hover`, element: <ImageHoverEffects /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/blog/blog_detail`, element: <BlogDetails /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/blog/blog_single`, element: <BlogSingle /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/blog/add_post`, element: <AddPost /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/faq`, element: <Faq /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/knowledgebase`, element: <Knowledgebase /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery`, element: <GalleryGrid /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/grid_gallery_description`, element: <GalleryDescription /> },
  { path: `${import.meta.env.PUBLIC_URL}/miscellaneous/gallery/masonry_gallery`, element: <MasonryGallery /> },
  { path: `${import.meta.env.PUBLIC_URL}/components/ui_kits/typography`, element: <Typography /> },
  { path: `${import.meta.env.PUBLIC_URL}/dashboard/ecommerce`, element: <ECommerce /> },
  { path: `${import.meta.env.PUBLIC_URL}/dashboard/project`, element: <Project /> },
  { path: `${import.meta.env.PUBLIC_URL}/widgets/general_widget`, element: <General /> },
  { path: `${import.meta.env.PUBLIC_URL}/dashboard/ecommerce`, element: <ECommerce /> },*/
  { path: `${import.meta.env.PUBLIC_URL}/dashboard/default`, element: <Default /> },
];
