

const Faqs = () => {
    return (
                <section className="text-gray-700 border-2 my-10 rounded-lg p-2">
                    <div className="container mx-auto">
                        <div className="text-center">
                            <h1 className="sm:text-3xl text-2xl font-bold text-center title-font text-black text">
                                Frequently Asked Question
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white text">
                                The most common questions about how our business works and what
                                can we do for you.
                            </p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    How do Order Food?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    Ordering food is a breeze! Simply log in to your account, click on the "Post a Job" button, fill in the necessary details about the position, and hit submit. Your job will then be reviewed by our team and, once approved, will be live on the site for potential candidates to discover.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    What information should I include in my food order?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    A comprehensive job posting increases the likelihood of attracting the right candidates. Be sure to include details such as the job title, responsibilities, qualifications, and any specific requirements. Don't forget to mention the location, type of employment (full-time, part-time, remote), and any other relevant details that could help candidates understand the role better.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    How long will it take to recieve my order?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    Job listings on TechJobBD typically remain active for 30 days. After that period, they will automatically expire. However, you can always repost or extend the listing if needed. Keep an eye on the expiration date to ensure your job stays visible to potential candidates.
                                    </span>
                                </details>
                            </div>
                            <div className="w-full lg:w-1/2 px-4 py-2">
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    Can I edit or remove my food order after it's live?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    Absolutely! You can edit your job posting at any time by logging into your account and accessing the "My Carts" section. From there, you can make changes to the job details or remove the posting altogether if the position has been filled or is no longer available.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    How can I order a food on my need?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    To maximize your reach, make sure your job posting is clear, concise, and appealing. Highlight the key responsibilities and benefits of the position. Additionally, consider using relevant keywords in your job description to improve search visibility. Sharing the job on your social media channels and professional networks can also boost exposure.
                                    </span>
                                </details>
                                <details className="mb-4">
                                    <summary className="font-semibold  bg-white drop-shadow-xl border rounded-md py-2 px-4">
                                    I'm having issues with my food ordering. Where can I get help?
                                    </summary>

                                    <span className="px-4 py-2 border block rounded-md bg-white">
                                    If you're experiencing any difficulties or have questions about your job posting, feel free to reach out to our support team at support@techjobbd.com. We're here to assist you and ensure your job listing process goes smoothly.
                                    </span>
                                </details>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Faqs;