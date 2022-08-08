// our-domain.com/new-meetup
import { useRouter } from "next/router";
import { Fragment } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";
function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupDate) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupDate),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create an amazing networking opportunities"
        ></meta>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </Fragment>
  );
}

export default NewMeetupPage;
