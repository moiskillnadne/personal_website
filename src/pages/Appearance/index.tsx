import './style.css';

import { DEFAULT_BG_IMAGE } from '~/app/App';
import { BackgroundSettingsCard } from '~/features/BackgroundSettings';
import { Box } from '~/shared/ui';

const AppearancePage = () => {
  return (
    <Box>
      <Box className="card-apple-style background-settings-layout">
        <Box className="display-flex justify-center">
          <h2 className="background-settings-title">CURRENT</h2>
        </Box>

        <Box className="display-flex justify-center">
          <BackgroundSettingsCard image={DEFAULT_BG_IMAGE} />
        </Box>
      </Box>
    </Box>
  );
};

export default AppearancePage;
