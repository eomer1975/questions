import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run scrumApp:serve:development',
        production: 'nx run scrumApp:serve:production',
      },
      ciWebServerCommand: 'nx run scrumApp:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
