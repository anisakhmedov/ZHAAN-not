import { AppDataSource } from '../data-source';

async function run() {
  await AppDataSource.initialize();
  // TODO: seed reference data (categories, sample providers, admin user)
  await AppDataSource.destroy();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
