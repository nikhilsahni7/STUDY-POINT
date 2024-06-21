const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export async function getDiscussions() {
  const res = await fetch(`${API_URL}/discussions`);
  if (!res.ok) throw new Error("Failed to fetch discussions");
  return res.json();
}

export async function getDiscussionById(id: string) {
  console.log("Fetching discussion with id:", id);
  const res = await fetch(`${API_URL}/discussions/${id}`);
  if (!res.ok) {
    console.error("Failed to fetch discussion. Status:", res.status);
    throw new Error("Failed to fetch discussion");
  }
  const data = await res.json();
  return data;
}
export async function createDiscussion(data: {
  title: string;
  question: string;
  userId: string;
}) {
  const res = await fetch(`${API_URL}/discussions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create discussion");
  return res.json();
}
export async function getReplies(discussionId: string) {
  const res = await fetch(`${API_URL}/replies?discussionId=${discussionId}`);
  if (!res.ok) throw new Error("Failed to fetch replies");
  return res.json();
}

export async function createReply(data: {
  answer: string;
  userId: string;
  discussionId: string;
}) {
  const res = await fetch(`${API_URL}/replies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const errorData = await res.json();
    console.error("API error response:", errorData);
    throw new Error(`Failed to create reply: ${res.status} ${res.statusText}`);
  }
  return res.json();
}
