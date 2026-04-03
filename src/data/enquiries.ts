import pb from '~/lib/pocketbase';

export interface Enquiry {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  about: string;
  message: string;
  created: string;
}

export async function saveEnquiry(data: Omit<Enquiry, 'id' | 'created'>) {
  return pb.collection('enquiries').create(data);
}

export async function getAllEnquiries(): Promise<Enquiry[]> {
  try {
    return await pb.collection('enquiries').getFullList<Enquiry>({ sort: '-created' });
  } catch {
    return [];
  }
}
