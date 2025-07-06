// Mock data for the vibe market preview section
export interface MockVibestream {
  id: string;
  creator: string;
  rta_id: string;
  rta_duration: string;
  chunks: number;
  is_complete: boolean;
  created_at: string;
  profile_image: string;
  total_size_mb: number;
  synapse_proof_set_id: string;
  filcdn_base: string;
}

export const mockVibestreams: MockVibestream[] = [
  {
    id: '1',
    creator: 'bassmaster.testnet',
    rta_id: 'rta_id1735138200_ak7x9m',
    rta_duration: '03:42',
    chunks: 7,
    is_complete: true,
    created_at: '2025-01-05T14:30:00Z',
    profile_image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=face',
    total_size_mb: 12.4,
    synapse_proof_set_id: '4477',
    filcdn_base: 'https://filcdn.io/1735138200_ak7x9m',
  },
  {
    id: '2',
    creator: 'chimney.testnet',
    rta_id: '1735138820_m3kp7t',
    rta_duration: '02:18',
    chunks: 5,
    is_complete: false,
    created_at: '2025-01-05T16:45:00Z',
    profile_image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face',
    total_size_mb: 8.7,
    synapse_proof_set_id: '4478',
    filcdn_base: 'https://filcdn.io/1735138820_m3kp7t',
  },
  {
    id: '3',
    creator: 'charlie22.testnet',
    rta_id: '1735139400_r8s9wn',
    rta_duration: '05:12',
    chunks: 11,
    is_complete: true,
    created_at: '2025-01-05T18:20:00Z',
    profile_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    total_size_mb: 18.9,
    synapse_proof_set_id: '4479',
    filcdn_base: 'https://filcdn.io/1735139400_r8s9wn',
  },
  {
    id: '4',
    creator: 'diana07.testnet',
    rta_id: '1735140900_p4k2vb',
    rta_duration: '04:33',
    chunks: 9,
    is_complete: true,
    created_at: '2025-01-05T20:15:00Z',
    profile_image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    total_size_mb: 16.2,
    synapse_proof_set_id: '4480',
    filcdn_base: 'https://filcdn.io/1735140900_p4k2vb',
  },
  {
    id: '5',
    creator: 'eve_music.testnet',
    rta_id: '1735141800_x7n5qj',
    rta_duration: '06:27',
    chunks: 13,
    is_complete: false,
    created_at: '2025-01-05T21:50:00Z',
    profile_image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
    total_size_mb: 22.1,
    synapse_proof_set_id: '4481',
    filcdn_base: 'https://filcdn.io/1735141800_x7n5qj',
  },
];

export const formatTimeAgo = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
  
  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInMinutes < 1440) {
    return `${Math.floor(diffInMinutes / 60)}h ago`;
  } else {
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  }
};

export const getRandomVibestreams = (count: number = 3): MockVibestream[] => {
  const shuffled = [...mockVibestreams].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}; 