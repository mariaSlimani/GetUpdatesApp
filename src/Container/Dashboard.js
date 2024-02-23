import { useEffect, useState } from "react";
import "./stylesheet/dashboard.css";
import Card from "../Component/card";

function Dashboard(props) {
    
  return <div id="dashboard">
    
    <Card cardId="num_pages" cardType="card_stats">
      <b>All Pages</b>
      <br />
      #
    </Card>
    <Card cardId="new_posts" cardType="card_stats">
      <b>New Posts</b>
      <br />
      #
    </Card>
    <Card cardId="latest_check" cardType="card_stats">
      <b>Latest Check</b>
      <br />
      #
    </Card>
    <Card cardId="recent_posts" cardType="card_content">
      List of Recent Posts
    </Card>
    <Card cardId="recent_pages" cardType="card_content">
      List of Recent Pages
    </Card>
  </div>;
}
/* dashboard
    first dev the screen to add the website and code + add a way to
            preview the website then add a menu to go over the websites with a *
            if there are any new notifs then for each website a screen to see
            the new posts add a homescreen add database add backend add fct to
            add a website + code add fct to retrieve the data (websites,
            website) add/mpdif/delete */ 
export default Dashboard;
