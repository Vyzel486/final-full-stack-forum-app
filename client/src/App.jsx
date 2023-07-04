import Routes from "./routes/Routes";
import Providers from "./contexts/Providers";

const App = () => {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
};

export default App;
