import { LibSQLStore } from '@mastra/libsql';
import { MongoDBStore } from '@mastra/mongodb';

/**
 * Function to create storage based on environment
 * Returns in-memory storage during build or if MongoDB is not configured
 * Returns MongoDB storage at runtime when properly configured
 */
export function createStorage() {
  const mongoUri = process.env.MONGODB_URI;
  const mongoDb = process.env.MONGODB_DB_NAME;
  
  // During build or if MongoDB not configured, use in-memory storage
  if (!mongoUri || !mongoDb || process.env.NEXT_PHASE === 'phase-production-build') {
    console.log('Using in-memory storage (build time or missing MongoDB config)');
    return new LibSQLStore({
      id: "mastra-storage",
      url: "file:../mastra.db",
    });
  }
  
  // At runtime with MongoDB configured
  console.log('Using MongoDB storage');
  return new MongoDBStore({
    id: 'memory-storage',
    url: mongoUri,
    dbName: mongoDb,
  }) as any;
}

