package code.labuladong.链表;


public class ListNode {
     public int val;
     public ListNode next;
     public ListNode() {}
     public ListNode(int val) { this.val = val; }
     public ListNode(int val, ListNode next) { this.val = val; this.next = next; }

     public ListNode setNext(ListNode next) {
          this.next = next;
          return this;
     }

     @Override
     public String toString() {
          return "ListNode{" +
                  "val=" + val +
                  ", next=" + next +
                  '}';
     }
}