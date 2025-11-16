import { useState, useEffect } from 'react';

export type NetworkStatus = 'healthy' | 'warning' | 'critical';

export type ParachainData = {
  id: number;
  name: string;
  status: NetworkStatus;
  congestion: number;
  hrmpQueue: number;
  collatorLiveness: number;
};

export const useMockNetworkData = () => {
  const [relayStatus, setRelayStatus] = useState<NetworkStatus>('healthy');
  const [finality, setFinality] = useState(7);
  const [blockProduction, setBlockProduction] = useState(6);
  const [validatorRotation, setValidatorRotation] = useState(98);

  const [blockData, setBlockData] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      time: `${i}s`,
      value: Math.floor(Math.random() * 10) + 90
    }))
  );

  const [finalityData, setFinalityData] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      time: `${i}s`,
      value: Math.floor(Math.random() * 3) + 5
    }))
  );

  const [parachains] = useState<ParachainData[]>([
    { id: 1, name: 'Acala', status: 'healthy', congestion: 15, hrmpQueue: 23, collatorLiveness: 99 },
    { id: 2, name: 'Moonbeam', status: 'healthy', congestion: 22, hrmpQueue: 45, collatorLiveness: 98 },
    { id: 3, name: 'Astar', status: 'warning', congestion: 67, hrmpQueue: 156, collatorLiveness: 95 },
    { id: 4, name: 'Bifrost', status: 'healthy', congestion: 18, hrmpQueue: 34, collatorLiveness: 99 },
    { id: 5, name: 'Phala', status: 'healthy', congestion: 12, hrmpQueue: 28, collatorLiveness: 100 },
    { id: 6, name: 'Centrifuge', status: 'warning', congestion: 54, hrmpQueue: 134, collatorLiveness: 96 },
    { id: 7, name: 'Parallel', status: 'critical', congestion: 89, hrmpQueue: 267, collatorLiveness: 87 },
    { id: 8, name: 'Clover', status: 'healthy', congestion: 19, hrmpQueue: 41, collatorLiveness: 98 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly update relay status
      const rand = Math.random();
      if (rand > 0.95) {
        setRelayStatus('critical');
      } else if (rand > 0.8) {
        setRelayStatus('warning');
      } else {
        setRelayStatus('healthy');
      }

      // Update finality
      setFinality(Math.floor(Math.random() * 5) + 5);
      
      // Update block production
      setBlockProduction(Math.floor(Math.random() * 2) + 5);

      // Update charts
      setBlockData(prev => [
        ...prev.slice(1),
        { time: `${prev.length}s`, value: Math.floor(Math.random() * 10) + 90 }
      ]);

      setFinalityData(prev => [
        ...prev.slice(1),
        { time: `${prev.length}s`, value: Math.floor(Math.random() * 3) + 5 }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    relayStatus,
    finality,
    blockProduction,
    validatorRotation,
    blockData,
    finalityData,
    parachains
  };
};
